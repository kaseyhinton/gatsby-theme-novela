import React from "react";
import styled from "@emotion/styled";

import Section from "@components/Section";
import SEO from "@components/SEO";
import Layout from "@components/Layout";
import Paginator from "@components/Navigation/Navigation.Paginator";
import Image from '@components/Image/Image';
import mediaqueries from "@styles/media";
import Headings from '@components/Headings';
import SocialLinks from "@components/SocialLinks";

import ArticlesHero from "../sections/articles/Articles.Hero";
import ArticlesGridLayoutProvider from "../sections/articles/Articles.Grid.Context";
import ArticlesGrid from "../sections/articles/Articles.Grid";

function ArticlesPage({ location, pageContext }) {
  const articles = pageContext.group;
  const author = pageContext.author;
  console.log(pageContext);

  return (
    <ArticlesGridLayoutProvider articles={articles}>
      <Layout>
      <AuthorContainer>
        <AuthorAvatar>
         <Image src={author.avatar.image.fluid} />
        </AuthorAvatar>
        <Title>{author.name}</Title>
        <Excerpt>{author.bio}</Excerpt> 
        <div>
          <SocialLinks />
        </div>
      </AuthorContainer>
        <SEO pathname={location.pathname} />
        <ArticlesHero />
        <Section narrow>
          <ArticlesGrid articles={articles} />
          <Paginator {...pageContext} />
        </Section>
        <ArticlesGradient />
      </Layout>
    </ArticlesGridLayoutProvider>
  );
}

export default ArticlesPage;

const ArticlesGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${(p) => p.theme.colors.gradient};
  transition: background 0.3s var(--ease-in-out-quad);
`;

const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;


const AuthorAvatar = styled.div`
  height: 164px;
  width: 164px;
  border: 2px solid ${p => p.theme.colors.card};
  box-shadow: 0px 15.619px 31.2381px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  margin: 32px 0;
  background: ${p => p.theme.colors.grey};
  overflow: hidden;

  .gatsby-image-wrapper > div {
    padding-bottom: 100% !important;
  }
`;

const Title = styled(Headings.h1)`
  font-size: 38px;
  line-height: 45px;
  font-family: ${p => p.theme.fonts.sansSerif};
  margin-bottom: 25px;

  ${mediaqueries.tablet`
    margin-bottom: 20px;
    font-size: 36px;
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
  `}
`;

const Excerpt = styled.p`
  margin-bottom: 32px;
  max-width: 400px;
  font-size: 18px;
  line-height: 25px;
  color: ${p => p.theme.colors.grey};
`;