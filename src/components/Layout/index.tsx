import * as React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../../styles/base';

const Container = styled.div`
  padding: 0 16px;
  @media (min-width: 768px) {
    padding: 0 120px;
  }
`;

const Layout: React.FC = ({ children }) => (
  <Container>
    <GlobalStyle />
    {children}
  </Container>
);

export default Layout;
