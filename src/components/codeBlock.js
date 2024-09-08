import React from 'react';
import 'prismjs/themes/prism-tomorrow.css'; // Optionally, use a different PrismJS theme

const CodeBlock = () => (
  <div className="p-6 bg-gray-800 text-gray-100 rounded-lg">
    <pre className="language-js">
      <code>
        {`
const add = (a, b) => a + b;

console.log(add(2, 3));
        `}
      </code>
    </pre>
  </div>
);

export default CodeBlock;
