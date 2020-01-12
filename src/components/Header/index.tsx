import * as React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  margin: 40px 0 0;
  @media (min-width: 768px) {
    margin: 80px 0 0;
  }
`;
const Title = styled.h1`
  margin: 0;
`;
const Description = styled.p`
  margin: 16px 0 0;
`;

const Header: React.FC = () => (
  <Container>
    <Title>hanagejet</Title>
    <Description>I&apos;m engineer</Description>
  </Container>
);

export default Header;
