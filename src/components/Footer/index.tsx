import * as React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  margin: 120px 0 0;
`;
const Description = styled.p``;
const Small = styled.small``;

const Header: React.FC = () => (
  <Footer>
    <Description>
      <Small>&copy; hanagejet. All Rights Reserved.</Small>
    </Description>
  </Footer>
);

export default Header;
