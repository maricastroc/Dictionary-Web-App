import {
  DefaultTheme,
  DefaultThemeMonospace,
  DefaultThemeSansSerif,
  DefaultThemeSerif,
} from '../styles/themes/default'

type ThemeType =
  | typeof DefaultTheme
  | typeof DefaultThemeMonospace
  | typeof DefaultThemeSansSerif
  | typeof DefaultThemeSerif

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
