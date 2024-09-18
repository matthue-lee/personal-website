module.exports = {
    theme: {
        extend: {
          colors: {
            primary: '#9a9385',
            secondary: '#a3c1b4',
            accent: '#7a8b65',
            additional: '#25312f'
          },
          fontFamily: {
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
