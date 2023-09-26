import { alpha, menuClasses, popoverClasses } from '@mui/material';
import { ThemePart } from '@/shared/theme'
export const themePaperPart: ThemePart<'MuiPaper'> = {
  styleOverrides: {
    root: ({ theme }) => ({
      [`&.${popoverClasses.paper}.${menuClasses.paper}`]: {
        borderRadius: 10,
        border: `1px solid ${theme.palette.neutral.lightBlue}`,
        boxShadow: `0px 16px 32px 0px ${alpha(theme.palette.neutral.dark, 0.04)}`,
        marginTop: 5,
      },
    }),
  },
};
