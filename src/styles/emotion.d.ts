import '@emotion/react';

type Typography = {
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing?: string;
};

declare module '@emotion/react' {
  export interface Theme {
    typography: {
      title: Typography;
      subtitle: Typography;
      body: Typography;
      label: Typography;
    };
  }
}
