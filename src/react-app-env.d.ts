/// <reference types="react-scripts" />

import 'styled-components';
import { theme } from './components/styles/theme';

type CustomTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
