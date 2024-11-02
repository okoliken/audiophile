import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  globalCss:{
    'html, body': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      listStyleType: 'none',
      textDecoration: 'none',
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 400,
      fontSynthesis: 'none',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      scrollSnapType: 'mandatory',
      backgroundColor: '#fff'
    }
  },
  theme: {
    extend: {
      tokens: {
        sizes: {
          button: {
            default: { value: '160px' },
            large: { value: '220px' }
          }
        },
        colors: {
          primary: { value: '#d87d4a' },
          primaryHover: { value: '#FBAF85' },
          black: { value: '#000' }
        }
      },
      breakpoints: {
        mobileS: '320px',
        mobileM: '375px',
        mobileL: '425px',
        tablet: '768px',
        laptop: '1024px',
        laptopL: '1440px',
        desktop: '2560px'
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
  jsxFramework: "react",
});
