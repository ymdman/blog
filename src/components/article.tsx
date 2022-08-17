import React from 'react';
import { css } from '@emotion/react';
import { color, fontSize, layout } from '../styles/settings';
import 'prismjs/themes/prism-tomorrow.css';

type Props = {
  html: string;
};

const container = css`
  & > * + p,
  & > * + ul,
  & > * + ol,
  & > * + div,
  & > * + table {
    margin-top: 15px;
  }

  & h2 {
    padding-bottom: 10px;
    font-size: ${fontSize.xxxLarge};
    font-weight: bold;
    line-height: 1.4;
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

  & ul,
  & ol {
    margin-left: 20px;
  }

  & > ul {
    list-style: disc;
  }

  & > ul > li > ul {
    list-style: circle;
  }

  & > ol {
    list-style: decimal;
  }

  & b {
    padding: 0 3px 1px;
    color: #fff;
    background-color: ${color.theme};
    font-weight: bold;
  }

  & a {
    color: ${color.anchor};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  & table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid ${color.border.secondary};
  }

  & th,
  & td {
    padding: 5px 10px;
    border: 1px solid ${color.border.secondary};
  }

  @media (prefers-color-scheme: dark) {
    & h2 {
      border-bottom-color: ${color.border.secondary};
    }
  }

  @media screen and (max-width: ${layout.threshold}px) {
    & > * + p,
    & > * + ul,
    & > * + ol,
    & > * + div {
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

const Article: React.FC<Props> = ({ html }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
      css={container}
    ></div>
  );
};

export default Article;
