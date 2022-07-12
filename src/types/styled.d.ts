import { CSSProp } from 'styled-components';

declare module 'react' {
  interface DOMAttributes {
    css?: CSSProp;
  }
}
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProp;
    }
  }
}
