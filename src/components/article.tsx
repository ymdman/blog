import React from 'react';
import { css } from '@emotion/react';
import { color, fontSize, layout } from '../styles/settings';

type MarkdownRemark = {
  html: string;
};

const article = css`
  margin-top: 80px;

  & > p,
  & > ul,
  & > ol,
  & > div {
    margin-top: 15px;
  }

  & h2 {
    padding-bottom: 7px;
    font-size: ${fontSize.xxxLarge};
    font-weight: bold;
    border-bottom: solid 1px ${color.border.primary};
  }

  & h2 + * {
    margin-top: 15px;
  }

  & * + h2 {
    margin-top: 80px;
  }

  & h3 {
    margin-top: 30px;
    font-size: ${fontSize.xxLarge};
    font-weight: bold;
  }

  & h3 + * {
    margin-top: 5px;
  }

  & > ul {
    margin-left: 20px;
    list-style: disc;
  }

  & > ol {
    margin-left: 20px;
    list-style: decimal;
  }

  & b {
    padding: 0 3px 1px;
    color: #fff;
    background-color: ${color.theme};
    font-weight: bold;
  }

  & a {
    color: #5277fd;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  @media (prefers-color-scheme: dark) {
    & h2 {
      border-bottom-color: ${color.border.secondary};
    }
  }

  @media screen and (max-width: ${layout.threshold}px) {
    margin-top: 45px;

    & > p,
    & > ul,
    & > ol,
    & > div {
      margin-top: 15px;
    }

    & h2 {
      font-size: ${fontSize.xLarge};
    }

    & h2 + * {
      margin-top: 10px;
    }

    & * + h2 {
      margin-top: 45px;
    }

    & h3 {
      margin-top: 25px;
      font-size: ${fontSize.large};
    }

    & h3 + * {
      margin-top: 5px;
    }
  }
`;

const Article: React.FC<MarkdownRemark> = ({ html }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
      css={article}
    ></div>
  );
};

export default Article;
