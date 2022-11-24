import React from 'react';
import Head from 'next/head';
// import { useStaticQuery, graphql } from 'gatsby';

type Props = {
  description?: string;
  lang?: string;
  title?: string;
  meta?: HTMLMetaElement[];
  pagePath?: string;
};

const SEO: React.FC<Props> = ({ description, lang, meta, title, pagePath }) => {
  // const { site } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //           description
  //           author
  //         }
  //       }
  //     }
  //   `
  // );

  // const metaDescription = description || site.siteMetadata.description;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="test" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content="test" />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Head>
  );
};

SEO.defaultProps = {
  lang: 'ja',
  meta: [],
  description: '',
};

export default SEO;
