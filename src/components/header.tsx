import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

const underline = css`
  text-decoration: underline;
  background-color: var(--color-theme);
`;

const Header = () => (
  <header css={underline}>
    <div>
      <h1>
        <Link to="/">YamaMemo</Link>
      </h1>
    </div>
  </header>
);

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header;
