import React from 'react';
import { ContentfulCategory } from '../../graphql-types';
import { css } from '@emotion/react';
import { color, fontSize } from '../styles/settings';

type Category = {
  category?: (ContentfulCategory | null)[] | null;
};

const tags = css`
  display: flex;
  font-size: ${fontSize.xSmall};
`;

const tag = css`
  padding: 2px 5px;
  border-radius: 3px;
  background-color: ${color.background.primary};
  color: ${color.font.primary};

  & + & {
    margin-left: 5px;
  }
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
