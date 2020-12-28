import React from 'react';
import { ContentfulCategory } from '../../graphql-types';
import { css } from '@emotion/react';
import { fontSize } from '../styles/settings';

type Category = {
  category?: (ContentfulCategory | null)[] | null;
};

const tags = css`
  display: flex;
  font-size: ${fontSize.xSmall};

  > li + li {
    margin-left: 5px;
  }
`;

const tag = css`
  padding: 2px 5px;
  background-color: #555;
  color: #fff;
`;

const Tags: React.FC<Category> = ({ category }) => {
  return (
    <ul css={tags}>
      {category?.map(item => (
        <li key={item?.id} css={tag}>
          {item?.name}
        </li>
      ))}
    </ul>
  );
};

export default Tags;
