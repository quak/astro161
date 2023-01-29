module.exports = {
    mode: 'jit',
    content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
    theme: {
      // ...
      deliciousHamburgers: {
        size: '60px',
        color: '#d3d3d3',
        colorLight: '#ffe7ee',
        padding: '10px',
        animationSpeed: 2,
        thickness: '4px'
      },
      colors:{
        'avaxpink' : '#f92564',
        'avaxlightpink' : '#ffe7ee',
        'greylight' : '#d3d3d3',
        'avaxdark' : '#1e1e1e',
        'avaxbg' : '#eeeeee'

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