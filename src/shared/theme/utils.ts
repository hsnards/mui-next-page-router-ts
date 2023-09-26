import {
    createTheme as MUICreateTheme,
    Palette,
    PaletteColor,
    Shadows,
    Theme,
    ThemeOptions,
  } from '@mui/material';
  import { mergeDeepRight } from 'ramda';
  import { ColorType } from './types';
  
  export const getColorFromThemeWithColorProps = (
    theme: Theme,
    props: { color?: ColorType },
    paletteKey: keyof PaletteColor = 'main',
  ): string => {
    const { color = 'primary' } = props;
    if (color === 'darkBlue')
      return theme.palette['darkBlue'][paletteKey as keyof Palette['darkBlue']];
    if (color === 'neutral') return theme.palette['neutral'][paletteKey as keyof Palette['neutral']];
    return theme.palette[color === 'inherit' ? 'primary' : color][paletteKey];
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createShadows = (): Shadows => Array(24).fill('') as any;
  
  export const createTheme =
    (defaultOptions: ThemeOptions) =>
    (options: ThemeOptions): Theme => {
      const theme = MUICreateTheme(mergeDeepRight(defaultOptions, options) as ThemeOptions);
      theme.shadows = createShadows();
      return theme;
    };
  
  