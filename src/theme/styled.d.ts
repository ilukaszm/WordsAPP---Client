import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      yellow: string;
      primaryRed: string;
      secondaryRed: string;
      darkBlue: string;
      black: string;
      white: string;
    };
    sizes: {
      XXL: string;
      XL: string;
      L: string;
      M: string;
      S: string;
    };
    bolds: {
      bold: string;
      regular: string;
      light: string;
    };
    font: string;
  }
}
