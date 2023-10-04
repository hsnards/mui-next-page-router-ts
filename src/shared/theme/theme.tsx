import { Roboto } from 'next/font/google';
import { ThemeOptions } from '@mui/material';
import { themeButtonPart } from '@/shared/components/button';
import { themePaperPart } from '@/shared/components/paper';
import { createTheme } from './utils';
import variables from '@/shared/styles/_alias.module.scss';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const defaultOptions: ThemeOptions = {
  shape: {
    borderRadius: 24,
  },
  palette: {
    primary: {
      main: variables.primaryMain,
      dark: variables.primaryDark,
    },

    secondary: {
      main: variables.secondaryMain,
      dark: variables.secondaryDark,
    },
    success: {
      main: variables.successMain,
    },
    warning: {
      main: variables.warningMain,
    },
    error: {
      main: variables.errorMain,
    },
    neutral: {
      white: '#FFFFFF',
      lightExtraBlue: '#F8FAFD',
      main: '#E7EEF9',
      lightBlue: '#E7EEF9',
      dark: '#0B1226',
      lightenDark: '#1E2845',
      lightGrey: '#989FB7',
      darkGrey: '#545F7E',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem', //32px
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem', //24px
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.125rem', //18px
    },
    h4: {
      fontWeight: 700,
      fontSize: '1rem', // 16px
    },
    body1: {
      fontWeight: 500,
      fontSize: '0.875rem', // 14px
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem', // 14px
    },
    button: {
      fontWeight: 700,
      fontSize: '0.875rem', // 14px
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem', // 12px
    },
    caption2: {
      fontWeight: 500,
      fontSize: '0.75rem', // 12px
    },
    caption3: {
      fontWeight: 700,
      fontSize: '0.75rem', // 12px
    },
  },
  components: {
    MuiButton: themeButtonPart,
    MuiPaper: themePaperPart,
    MuiCssBaseline: {
      styleOverrides: `

      *{
        margin:0;
        padding:0;
      }
      `,
    },
  },
};

const rtlThemeOptions: ThemeOptions = {
  direction: 'rtl',
  typography: {
    fontFamily: 'IRANYekanXFaNum',
  },
};

export const modernDigitsOptions: ThemeOptions = {
  typography: {
    fontFamily: '"IRANYekanX", "Roboto", "Helvetica", "Arial", sans-serif',
  },
};

const createMetrilandTheme = createTheme(defaultOptions);

export const rtlTheme = createMetrilandTheme(rtlThemeOptions);

export const modernDigitsTheme = createMetrilandTheme(modernDigitsOptions);
