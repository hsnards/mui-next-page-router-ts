import {
  ComponentNameToClassKey,
  ComponentsOverrides,
  ComponentsProps,
  ComponentsPropsList,
  ComponentsVariants,
  Theme,
} from '@mui/material';

export interface Colors {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}
export type ThemePart<name extends keyof ComponentsPropsList> = {
  defaultProps?: ComponentsProps[name];
  styleOverrides?: name extends keyof ComponentNameToClassKey ? ComponentsOverrides<Theme>[name] : never;
  variants?: ComponentsVariants[name];
};

export type ColorType =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | 'darkBlue'
  | 'neutral';

declare module '@mui/material/styles' {
  interface PaletteColor extends Colors {}
  interface Palette {
    neutral: {
      white: string;
      lightExtraBlue: string;
      lightBlue: string;
      main: string;
      dark: string;
      lightenDark: string;
      lightGrey: string;
      darkGrey: string;
    };
    darkBlue: {
      main: string;
      light: string;
    };
  }

  interface PaletteOptions {
    neutral?: {
      white: string;
      lightExtraBlue: string;
      lightBlue: string;
      main: string;
      dark: string;
      lightenDark: string;
      lightGrey: string;
      darkGrey: string;
    };

    darkBlue?: {
      main: string;
      light: string;
    };
  }
  interface TypographyVariants {
    caption2: React.CSSProperties;
    caption3?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    caption2?: React.CSSProperties;
    caption3?: React.CSSProperties;
  }
}
declare module '@mui/material' {
  interface TypographyPropsVariantOverrides {
    caption2: true;
    caption3: true;
  }
}
