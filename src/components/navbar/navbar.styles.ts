import { styled } from '../../../styled-system/jsx'

export const Navbar = styled('header', {
  base: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid rgba(76, 76, 76, 0.2)',
    opacity: 'border 0.104',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    padding: {
      base: '22px 20px',
      sm: '28px 20px',
      lg: '38px 20px'
    },

    '& #menu': {
      display: { 
        base: 'block',
        lg: 'none' 
      }
    },
    
    '& ul.Header__Desktop': {
      display: { 
        base: 'none',
        lg: 'flex'
      },
      alignItems: 'center',
      gap: '0 45px',
    },

    '& .header__menu': {
      width: { 
        base: '100%',
        lg: 'inherit' 
      },
      display: 'flex',
      alignItems: { 
        base: 'center',
        md: 'start' 
      },
      justifyContent: { 
        base: 'center',
        md: 'start' 
      },
      '& svg': {
        marginLeft: { 
          base: '0',
          md: '38px',
          lg: '0' 
        },
        cursor: { lg: 'pointer' }
      }
    },

    '& svg#cartIcon': {
      cursor: { lg: 'pointer' }
    },

    '& ul.Header__Desktop li a': {
      color: '#fff',
      letterSpacing: '2px',
      fontWeight: '700',
      listStyleType:'none',
      lineHeight: '25px',
      fontSize: '13px',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
      '&:hover': {
        color: 'rgba(216, 125, 74, 1)'
      },
      '&.active': {
        color: 'rgba(216, 125, 74, 1)'
      }
    },
  },
})