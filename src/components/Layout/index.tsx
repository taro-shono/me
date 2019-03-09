import * as React from 'react';
import 'sanitize.css';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 16px;
  @media (min-width: 768px) {
    padding: 0 120px;
  }
`;

const Layout: React.FC = ({ children }) => <Container>{children}</Container>;

export default Layout;
