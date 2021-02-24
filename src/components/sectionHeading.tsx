import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import { color, fontSize, layout } from '../styles/settings';

type Props = {
  src?: string;
  label?: string | null;
};

const anchor = css`
  display: block;
  color: ${color.font.primary};
  transition: opacity 200ms;

  @media (hover: hover) {
    &:hover {
      opacity: 0.5;
    }
  }

  @media (prefers-color-scheme: dark) {
    color: ${color.font.secondary};
  }
`;

const heading = css`
  padding-bottom: 10px;
  font-size: ${fontSize.xxxLarge};
  font-weight: bold;
  line-height: 1.4;
  border-bottom: solid 1px ${color.border.primary};

  @media (prefers-color-scheme: dark) {
    border-bottom-color: ${color.border.secondary};
  }

  @media screen and (max-width: ${layout.threshold}px) {
    font-size: ${fontSize.xLarge};
  }
`;

const sectionHeading: React.FC<Props> = ({ src, label }) => {
  return (
    <>
      {src ? (
        <Link to={src} css={anchor}>
          <h2 css={heading}>{label}</h2>
        </Link>
      ) : (
        <h2 css={heading}>{label}</h2>
      )}
    </>
  );
};

export default sectionHeading;
