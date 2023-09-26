import { buttonClasses } from '@mui/material';
import { ThemePart } from '@/shared/theme';


export const themeButtonPart: ThemePart<'MuiButton'> = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      ...(ownerState.size === 'small' && {
        padding: '5px 10px',
      }),
      ...(ownerState.size === 'medium' && {
        padding: '8px 16px',
      }),
      ...(ownerState.size === 'large' && {
        padding: '11px 22px',
      }),
      ...(ownerState.variant === 'contained' && {
        [`&.${buttonClasses.disabled}`]: {
          background: theme.palette.neutral.lightBlue,
        },
      }),
      ...(ownerState.variant === 'outlined' && {
        [`&.${buttonClasses.disabled}`]: {
          borderColor: theme.palette.neutral.lightBlue,
        },
      }),
    }),
  },
};

