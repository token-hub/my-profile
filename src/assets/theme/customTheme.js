import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography : {
    fontFamily: 
      [ 
        'Rubik',
        'Poppins',
        'Sora',
        'Open Sans',
        'Inter',
      ].join(','),
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    tertiary: {
      main: '#A9A9A9',
      dark: '#918e8e',
    }
  }
});

theme.typography.h3 = {
  fontSize: '3rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.4rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
};

export default theme;