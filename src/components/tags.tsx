// import React from 'react';
// import Link from 'next/link';
// import { ContentfulCategory } from '../../graphql-types';
// import { css } from '@emotion/react';
// import { color, fontSize } from '../styles/settings';

// type Props = {
//   category?: (ContentfulCategory | null)[] | null;
// };

// const tags = css`
//   display: flex;
//   font-size: ${fontSize.xSmall};
// `;

// const tag = css`
//   border-radius: 3px;
//   background-color: ${color.background.primary};
//   color: ${color.font.primary};
//   line-height: 1;

//   & + & {
//     margin-left: 5px;
//   }

//   @media (prefers-color-scheme: dark) {
//     background-color: ${color.background.tertiary};
//     color: ${color.font.secondary};
//   }
// `;

// const anchor = css`
//   display: block;
//   padding: 3px 5px 2px;
//   color: inherit;
//   transition: opacity 200ms;

//   @media (hover: hover) {
//     &:hover {
//       opacity: 0.5;
//     }
//   }
// `;

// const Tags: React.FC<Props> = ({ category }) => {
//   return (
//     <ul css={tags}>
//       {category?.map(item => (
//         <li key={item?.id} css={tag}>
//           <Link href={`/category/${item?.slug}`} css={anchor}>
//             {item?.name}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Tags;
export {};
