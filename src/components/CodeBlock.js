import React, { useEffect } from 'react';
import Prism from 'prismjs';

const CodeBlock = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className="rounded-lg p-4 bg-gray-100 text-xs overflow-auto">
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;
