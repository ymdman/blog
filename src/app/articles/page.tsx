// 'use client';

import type { Metadata } from 'next';
import Image from 'next/image';
import { gql } from '@apollo/client';
import createApolloClient from '../../../apollo-client';
import { css } from '../../../styled-system/css';
import { Stack } from '../../../styled-system/jsx';
import { Article } from '../../components/Article';
import { Heading } from '../../components/Heading';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Articles',
  description: '',
};

export async function getData() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query BlogPostCollection {
        blogPostCollection {
          total
          items {
            title
            sys {
              id
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      blogPostCollection: data,
    },
  };
}

export default async function Page() {
  const data = await getData();

  console.log(data.props.blogPostCollection.blogPostCollection);

  return (
    <>
      <Heading as="h1" size="5xl">
        Articles
      </Heading>
      {data.props.blogPostCollection.blogPostCollection.items.map(item => (
        <Link href={`/articles/${item.sys.id}`} key={item.sys.id}>
          <div>{item.title}</div>
        </Link>
      ))}
    </>
  );
}
