import { SerializedStyles } from '@emotion/react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    css?: SerializedStyles;
  }
}
