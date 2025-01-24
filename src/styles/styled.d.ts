import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      white: string;
      greyScale1: string;
    };
    font: {
      title: string;
      subtitle: string;
      body: string;
      caption: string;
      button: string;
    };
  }
}
