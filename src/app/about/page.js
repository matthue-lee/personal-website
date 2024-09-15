export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 text-2xl">
      <div className="flex px-32">
        {/* Left column - Text content */}
        <div className="w-full md:w-1/2 pr-8">
          <p className="text-3xl">
            Kia Ora, I&#39;m Matthew Lee
          </p>
          <p className="mt-5 md:mt-20 text-lg text-justify">
            I&#39;m a dedicated and passionate individual with a strong interest in technology and innovation. 
            I thrive in dynamic environments where I can apply my skills to solve complex problems and contribute to meaningful projects. 
            <br/><br/>
            <strong>
            With a blend of technical expertise and hands-on experience, I enjoy tackling new challenges
            and continuously growing as both a developer and a team player.</strong>
            <br/><br/>
          </p>
          <p className="text-lg">
            Feel free to take a look around my website at some of the projects I&#39;ve done,
            but if you&#39;d rather a traditional Cover Letter and CV, I&#39;ve got them here:
          </p>
          
          {/* Links to CV and Cover Letter */}
          <div className="flex mt-4 space-x-8">
            {/* CV Link */}
            <a href="/content/CV Matthew Lee.pdf" target="_blank" className="flex items-center">
              <img 
                src="/images/PDF_file_icon.png" 
                alt="PDF icon" 
                className="w-5 h-5 mr-2" 
              />
              <span className="text-primary hover:text-accent underline text-lg">CV</span>
            </a>
            
            {/* Cover Letter Link */}
            <a href="/content/Cover Letter Matthew Lee.pdf" target="_blank" className="flex items-center">
              <img 
                src="/images/PDF_file_icon.png" 
                alt="PDF icon" 
                className="w-5 h-5 mr-2" 
              />
              <span className="text-primary hover:text-accent underline text-lg">Cover Letter</span>
            </a>
          </div>
        </div>

        {/* Right column - Image */}
        <div className="w-full md:w-1/2 flex flex-col items-center mt-16">
          <img 
            src="/images/about.jpg" 
            alt="Profile Image" 
            className="w-2/3 h-auto"
          />
          
          {/* Outside work paragraph */}
          <p className="text-sm w-[80%] mt-4 text-justify">
            Outside of my work, I love staying active and creative. Whether it&#39;s catching waves, 
            hitting the slopes, or capturing the perfect shot through a camera,
            I&#39;m always looking for new ways to challenge myself. I&#39;ve even dabbled in modeling... 
            These passions keep me grounded and energized, giving me a fresh perspective that 
            I like to bring to everything I do.
          </p>
        </div>
      </div>
    </div>
  );
}
