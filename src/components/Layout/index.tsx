import * as React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../../styles/base';

const Container = styled.div`
  margin: 0 auto;
  max-width: 720px;
  padding: 0 16px;
  @media (min-width: 768px) {
    padding: 0 24px;
  }
`;

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Container>
    <GlobalStyle />
    {children}
  </Container>
);

export default Layout;
