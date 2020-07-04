import * as React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  margin: 120px 0 0;
`;
const Description = styled.p``;
const Small = styled.small``;

const Footer: React.FC = () => (
  <Container>
    <Description>
      <Small>&copy; hanagejet</Small>
    </Description>
  </Container>
);

export default Footer;
