import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

const header = css`
  text-decoration: underline;
  background-color: var(--color-theme);
`;

const Header = () => (
  <header css={header}>
    <div>
      <h1>
        <Link to="/">YamaMemo</Link>
      </h1>
    </div>
  </header>
);

export default Header;
