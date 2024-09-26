'use client';
import React from 'react';
import Image from 'next/image';
// import 'prismjs/themes/prism-tomorrow.css'; // Choose your preferred theme
// import 'prismjs/components/prism-javascript';
// import 'prismjs/components/prism-jsx';
import CodeBlock from '../../components/CodeBlock';
import 'prismjs/components/prism-python'; // Add Python syntax support
import { Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({
    subsets: ['latin'],
    weight: ['400', '500', '700'], // You can adjust weights
});

export default function Page() {
    const extractCode = `
kernel = cv2.getStructuringElement(
cv2.MORPH_RECT, (2, 2)
)
dilated = cv2.dilate(thresh, kernel, 
iterations=1)

custom_config = r'--psm 6'
details = pytesseract.image_to_data(
dilated,
    config=custom_config, 
output_type=pytesseract.Output.DICT)

result = {'text': '', 'confidence': []}
for i in range(len(details['text'])):
  if int(details['conf'][i]) > 0: 
    result['text'] += details['text'][i] + ' '
    result['confidence'].append(details['conf'][i])
    `;
    
    const bestThreshold = `
for book, orientations in average_confidences.items():
best_threshold = None
highest_confidence = -1  # Start with a very low confidence
best_orientation = None

for orientation, thresholds in orientations.items():
    for threshold, avg_conf in thresholds.items():
        if avg_conf is not None and avg_conf > highest_confidence:
            highest_confidence = avg_conf
            best_threshold = threshold
    `;

    const extractBooks = `
def identify_books(img_path):
    image = Image.open(img_path)

    CLIENT = InferenceHTTPClient(
        api_url="https://detect.roboflow.com",
        api_key="XCOXwUNs0horAXScKckM"
    )

    result = CLIENT.infer(image, model_id="coco/5")
    `

    const preprocess = `
for filename in os.listdir(input_folder):
if filename.endswith(('.jpg', '.jpeg', '.png')):
    image_path = os.path.join(input_folder, filename)
    image = cv2.imread(image_path)
    image = cv2.rotate(image, cv2.ROTATE_90_CLOCKWISE)

    # Convert to grayscale and apply Gaussian Blur
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)

    results[filename] = {'inverted': {}, 'non_inverted': {}}
    
    for threshold in thresholds:
        # Process with binary inversion
        result, dilated_image = 
        extract_text(blurred, threshold, True)
        results[filename]['inverted'][threshold] = {
            'text': result['text'],
            'confidence': result['confidence'],
        }

    `

    return (
        <>
            <div className='text-3xl text-additional px-8 text-center'>
                Identifying books on a bookshelf
            </div>
            <div className="container mx-auto px-4">
                {/* First Section */}
                <section className="flex flex-col md:flex-row items-center my-8 pt-16">
                    <div className="flex-1 text-left pr-4 mb-4 md:mb-0">
                        <h2 className="text-2xl mb-2">Goals</h2>
                        <p className="text-lg">
                            An avid reader, I've always wished I actually knew what books I owned. 
                            However, with over 300 books spread across a number of bookshelves, 
                            individually logging all of them was always out of the question. 
                            However, I figured if I could take a photo and automatically extract the title text off each spine, 
                            my job would be made a hell of a lot easier.
                        </p>
                    </div>
                    <div className="flex-1 relative h-60 w-full mb-4 md:mb-0"> {/* Adjust height as needed */}
                        <Image
                            src="/content/books.png"
                            alt="books Image"
                            fill
                            className="absolute inset-0"
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                </section>

                {/* Second Section */}
                <section className="flex flex-col md:flex-row items-center my-8 pt-16">
                <div className="flex-1 relative h-auto text-xs mb:w-1/2 w-[500px] mb-4 md:mb-0 sm:-mx-0 -mx-16">
                        {/* Code Block on the left */}
                        <CodeBlock code={extractBooks} language="python" className={sourceCodePro.className} />
                    </div>
                    <div className="flex-1 text-left pr-4 md:pl-4">
                        <h2 className="text-2xl mb-2">Cropping into books</h2>
                        <p className="text-lg">The first step to this, although obvious in hindsight, took me a while to arrive at. It is a prerequisite that 
                            the user identifies the orientation of the books, and that the photo taken is cropped to the size of one shelf. Once this is done 
                            using an API call to roboflow, with a model trained on Microsoft&#39;s COCO dataset, I can begin the text extraction on 
                            individual books. 
                        </p>
                    </div>
                </section>

                {/* Additional Sections */}
                <section className="flex flex-col md:flex-row items-center my-8 pt-16">
                    <div className="flex-1 text-left pr-4 mb-4 md:mb-0">
                        <h2 className="text-2xl mb-2">Dominant Colours</h2>
                        <p className="text-lg">I knew that spines often wouldn&#39;t have enough text to identify the books, as they will sometimes
                            just have an author on it. So using K-Means clustering, I extracted the dominant colour to use it as an additional measure
                            to inform the inference on book title.
                        </p>
                    </div>
                    <div className="flex-1 relative h-60 w-full mb-4 md:mb-0"> {/* Adjust height as needed */}
                        <Image
                            src="/content/kmeans.png"
                            alt="Gripper Image"
                            fill // Use fill instead of layout="fill"
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                </section>

                <section className="flex flex-col md:flex-row items-center my-8 pt-16">
                    <div className="flex-1 relative h-auto text-xs mb-4 md:mb-0 -mx-10 md:-mx-0">
                        <div className="max-w-md mx-auto px-2"> {/* Change max-w and px values as needed */}
                            <CodeBlock code={preprocess} language="python" className={sourceCodePro.className} />
                        </div>
                    </div>
                    <div className="flex-1 text-left pr-4 md:pl-4">
                        <h2 className="text-2xl mb-2">Preprocessing for OCR</h2>
                        <p className="text-lg">Before any text extraction could be done I first had to preprocess the image. Using a combination 
                            of grayscaling the image, applying a Gaussian Blur, and then attempting a binary inversion with varying thresholds,
                            images were created that could have the text extracted from them. 
                        </p>
                    </div>
                </section>

                <section className="flex flex-col md:flex-row items-center my-8 pt-16">
                    <div className="flex-1 text-left pr-4 mb-4 md:mb-0">
                        <h2 className="text-2xl mb-2">Extracting text</h2>
                        <p className="text-lg">The text extraction was done using calls pytesseracts image_to_data. image_to_data
                            was selected over image_to_text as it allowed me to use the confidence values to inform later decisions. 
                        </p>
                    </div>
                    <div className="flex-1 relative h-auto text-xs mb-4 md:mb-0 -mx-10 md:-mx-0">
                        <div className="max-w-md mx-auto px-2"> {/* Change max-w and px values as needed */}
                            <CodeBlock code={extractCode} language="python" className={sourceCodePro.className} />
                        </div>
                    </div>
                </section>

                {/* Code Block Section */}
                <section className="flex flex-col md:flex-row items-center my-8 pt-16">
                    <div className="flex-1 relative h-auto text-xs mb:w-1/2 w-[500px] mb-4 md:mb-0 md:-mx-0 -mx-10">
                        {/* Code Block on the left */}
                        <CodeBlock code={bestThreshold} language="python" className={sourceCodePro.className} />
                    </div>
                    <div className="flex-1 text-left pr-4 md:pl-4">
                        {/* Text on the right */}
                        <h2 className="text-2xl mb-2">Selecting best thresholds</h2>
                        <p className="text-lg">With the confidence values I was
                        able to see which thresholds and binary inversion combination produced the most readable text.</p>
                    </div>
                </section>
            </div>
        </>
    );
}
