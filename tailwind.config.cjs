module.exports = {
    mode: 'jit',
    content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
    theme: {
      // ...
      deliciousHamburgers: {
        size: '60px', // must be in px.
        color: '#586061',
        colorLight: '#fff8f4',
        padding: '20px', // must be in px.
        animationSpeed: 2,
        thickness: '4px'
      },
    },
    variants: {},
    plugins: [require('tailwindcss-delicious-hamburgers')],
  };