module.exports = {
    theme: {
        extend: {
          fontFamily: {
            body: ['playfairDisplay', 'sans-serif'],
          },
        },
      },
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        './node_modules/preline/preline.js',
        './node_modules/preline/preline.js',
    ],
    plugins: [
        require('preline/plugin'),
    ],
  }
