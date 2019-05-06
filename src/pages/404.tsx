import * as React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Meta from '../components/Meta';

const Container = styled.div`
  margin: 240px 0;
  text-align: center;
`;
const Title = styled.h1``;
const NotFound: React.FC = () => (
  <Layout>
    <Meta />
    <Container>
      <Title>404 jet</Title>
    </Container>
    <Footer />
  </Layout>
);
export default NotFound;
