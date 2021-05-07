import * as React from 'react';
import styled from 'styled-components';
import { withPrefix } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Meta from '../components/Meta';

const Content = styled.section`
  margin: 72px 0 0;
`;
const ContentHeading = styled.h2`
  margin: 0;
`;
const ContentList = styled.ul`
  margin: 16px 0 0;
  padding: 0;
  list-style-position: inside;
`;
const ContentItem = styled.li`
  margin: 8px 0 0;
`;
const Anchor = styled.a``;
const Me = styled.img``;

const Index: React.FC = () => (
  <Layout>
    <Meta />
    <Header />
    <Content>
      <ContentHeading>Product</ContentHeading>
      <ContentList>
        <ContentItem>
          <Anchor
            href="https://www.picker.today"
            target="_blank"
            rel="noreferrer"
          >
            https://www.picker.today
          </Anchor>
        </ContentItem>
      </ContentList>
    </Content>
    <Content>
      <ContentHeading>Contact</ContentHeading>
      <ContentList>
        <ContentItem>
          <Anchor
            href="https://blog.hanagejet.com"
            target="_blank"
            rel="noreferrer"
          >
            https://blog.hanagejet.com
          </Anchor>
        </ContentItem>
        <ContentItem>
          <Anchor
            href="https://github.com/hanagejet"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/hanagejet
          </Anchor>
        </ContentItem>
        <ContentItem>
          <Anchor
            href="https://twitter.com/hanagejet"
            target="_blank"
            rel="noreferrer"
          >
            https://twitter.com/hanagejet
          </Anchor>
        </ContentItem>
        <ContentItem>
          <Anchor
            href="https://www.instagram.com/hanagejet"
            target="_blank"
            rel="noreferrer"
          >
            https://www.instagram.com/hanagejet
          </Anchor>
        </ContentItem>
      </ContentList>
    </Content>
    <Footer />
  </Layout>
);
export default Index;
