module.exports = {
    mode: 'jit',
    content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
    theme: {
      // ...
      deliciousHamburgers: {
        size: '60px',
        color: '#f081a2',
        colorLight: '#ffe7ee',
        padding: '10px',
        animationSpeed: 2,
        thickness: '4px'
      },
      colors:{
        'avaxpink' : '#f081a2',
        'avaxlightpink' : '#ffe7ee',
        //'avaxbg' : 'bg-slate-50'
      },
      extend:{
        lineHeight:{
          '12': '3rem'
        }
      }
    },
    variants: {},
    plugins: [require('tailwindcss-delicious-hamburgers')],
  };