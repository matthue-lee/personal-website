'use client'
import React, { useEffect, useState } from 'react';

export default function Page() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Fetch the HTML file from the public folder
    fetch('/P4P Final.html') // Adjust the path if needed
      .then((response) => response.text())
      .then((data) => {
        setHtmlContent(data);
      })
      .catch((error) => {
        console.error('Error loading the HTML file:', error);
      });
  }, []);

  return (
    <div>
      {/* Inject the loaded HTML content */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
