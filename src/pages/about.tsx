import React from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import client from '../api/contentful';
import { IAbout } from '../type/contentful';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Heading from '../components/heading';
import Body from '../components/body';
import Section from '../components/section';
import SectionHeading from '../components/sectionHeading';
import Article from '../components/article';
import IconGitHub from '../components/icons/github';
import IconTwitter from '../components/icons/twitter';
import { css } from '@emotion/react';
import { color, layout } from '../styles/settings';

export const getStaticProps: GetStaticProps = async () => {
  const about = await client.getEntries({
    content_type: 'about',
  });

  return {
    props: {
      about: about.items[0],
    },
  };
};

type AboutProps = {
  about: IAbout;
};

const AboutPage: React.VFC<AboutProps> = ({ about }) => {
  console.log('about', about);

  const pathName =
    typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <Layout>
      <SEO title="About" description="Aboutページです。" pagePath={pathName} />
      <Heading label={'About'} />
      <Body>
        <Section>
          <SectionHeading label={'This Site'} />
          <div css={article}>
            <Article html={about.fields.site ?? ''} />
          </div>
        </Section>
        <Section>
          <SectionHeading label={'Profile'} />
          <div css={profile}>
            <div css={avatar}>
              <Image
                src="/images/avatar.jpg"
                alt="プロフィール画像"
                width="120"
                height="120"
              />
            </div>
            <div css={detail}>
              <Article html={about.fields.profile ?? ''} />
              <div css={sns}>
                <a
                  href="https://github.com/ymdman"
                  rel="noreferrer"
                  target="_blank"
                  css={anchor}
                >
                  <IconGitHub width={22} height={22} />
                </a>
                <a
                  href="https://twitter.com/yama80059601"
                  rel="noreferrer"
                  target="_blank"
                  css={anchor}
                >
                  <IconTwitter width={22} height={22} />
                </a>
              </div>
            </div>
          </div>
        </Section>
      </Body>
    </Layout>
  );
};

const article = css`
  margin-top: 15px;

  @media screen and (max-width: ${layout.threshold}px) {
    margin-top: 10px;
  }
`;

const profile = css`
  display: flex;
  align-items: center;
  margin-top: 15px;

  @media screen and (max-width: ${layout.threshold}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const avatar = css`
  flex-shrink: 0;
  width: 120px;
  overflow: hidden;
  border: solid 1px ${color.border.primary};
  border-radius: 50%;

  @media (prefers-color-scheme: dark) {
    border-color: ${color.border.secondary};
  }
`;

const detail = css`
  margin-left: 30px;

  @media screen and (max-width: ${layout.threshold}px) {
    margin-top: 20px;
    margin-left: 0;
  }
`;

const sns = css`
  margin-top: 20px;
`;

const anchor = css`
  color: inherit;
  transition: opacity 200ms;

  & + & {
    margin-left: 10px;
  }

  @media (hover: hover) {
    &:hover {
      opacity: 0.5;
    }
  }
`;

export default AboutPage;
