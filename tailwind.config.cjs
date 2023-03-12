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
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
        '10xl': '10rem',
        '11xl': '12rem',

      }
    },
    variants: {},
    plugins: [require('tailwindcss-delicious-hamburgers')],
  };