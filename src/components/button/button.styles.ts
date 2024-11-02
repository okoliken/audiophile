  // button.css.ts
  import { cva } from '../../../styled-system/css'
  
  const baseButton = {
    fontSize: '0.8125em',
    color: 'white',
    padding: '0.25em 1em',
    height: '48px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontWeight: 700,
    appearance: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: 'all 300ms ease-in-out',
    
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5
    }
  }
  
  export const button = cva({
    base: baseButton,
    variants: {
      size: {
        default: { width: 'button.default' },
        large: { width: 'button.large' }
      },
      buttonType: {
        primary: {
          backgroundColor: 'primary',
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: 'primary',
          
          '&:hover:not(:disabled)': {
            backgroundColor: 'primaryHover',
            borderColor: 'primaryHover',
            color: 'white'
          }
        },
        secondary: {
          backgroundColor: 'black',
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: 'black',
          
          '&:hover:not(:disabled)': {
            backgroundColor: 'black',
            borderColor: 'black',
            color: 'white'
          }
        },
        transparent: {
          backgroundColor: 'transparent',
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: 'black',
          
          '&:hover:not(:disabled)': {
            backgroundColor: 'black',
            borderColor: 'black',
            color: 'white'
          }
        },
      },
      variant: {
        solid: {},
        outline: {
          background: 'transparent',
          color: 'black',
          transition: 'all 0.2s ease-in-out',
          
          '&:hover:not(:disabled)': {
            backgroundColor: 'black',
            color: 'white'
          }
        },
        ghost: {
          background: 'transparent',
          borderColor: 'transparent',
          color: 'black',
          
          '&:hover:not(:disabled)': {
            backgroundColor: 'rgba(0,0,0,0.05)'
          }
        }
      }
    },
    compoundVariants: [
      {
        variant: 'outline',
        buttonType: 'transparent',
        css: {
          borderColor: 'black',
          color: 'black',
          '&:hover:not(:disabled)': {
            backgroundColor: 'black',
            color: 'white',
            borderColor: 'black'
          }
        }
      },
      {
        variant: 'ghost',
        buttonType: 'primary',
        css: {
          color: 'primary',
          '&:hover:not(:disabled)': {
            backgroundColor: 'rgba(var(--colors-primary), 0.05)'
          }
        }
      }
    ],
    defaultVariants: {
      size: 'default',
      buttonType: 'primary',
      variant: 'solid'
    }
  })
  
  // usage example in a React component
  import { styled } from '../../../styled-system/jsx'
  
  export const Button = styled('button', button)
  
