import React from 'react';
import Link from 'next/link';
import IconArrowLeft from '../components/icons/arrowLeft';
import IconArrowRight from '../components/icons/arrowRight';
import { css } from '@emotion/react';
import { color } from '../styles/settings';

type Props = {
  currentPage: number;
  length: number;
  limit: number;
  isFirst: boolean;
  isLast: boolean;
};

const container = css`
  display: flex;
  justify-content: space-between;
`;

const item = css`
  display: flex;
  align-items: center;
  color: ${color.font.primary};

  @media (prefers-color-scheme: dark) {
    color: ${color.font.secondary};
  }
`;

const iconLeft = css`
  display: flex;
  margin-right: 5px;
`;

const iconRight = css`
  display: flex;
  margin-left: 5px;
`;

const Pagination: React.FC<Props> = ({
  currentPage,
  length,
  limit,
  isFirst,
  isLast,
}) => {
  const disabledStyle = 'opacity: 0.5; cursor: default; pointer-events: none;';
  const firstItemDisabled = isFirst && disabledStyle;
  const lastItemDisabled = isLast && disabledStyle;
  const prevPage = currentPage === 2 ? '/blog/' : `/blog/${currentPage - 1}`;

  return (
    <>
      {length > limit && (
        <div css={container}>
          <Link href={isFirst ? '/' : prevPage} css={[item, firstItemDisabled]}>
            <div css={iconLeft}>
              <IconArrowLeft width={20} height={20} />
            </div>
            <span>Prev</span>
          </Link>
          <Link
            href={isLast ? '/' : `/blog/${currentPage + 1}`}
            css={[item, lastItemDisabled]}
          >
            <span>Next</span>
            <div css={iconRight}>
              <IconArrowRight width={20} height={20} />
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Pagination;
