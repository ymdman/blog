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
import { BlogPostCollection as BlogPostCollectionData } from '../../../src/gql/graphql';

export const metadata: Metadata = {
  title: 'Articles',
  description: '',
};

type BlogPostCollection = {
  blogPostCollection: BlogPostCollectionData | null;
  error?: string;
};

export async function getData(): Promise<BlogPostCollection> {
  const client = createApolloClient();

  try {
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
      blogPostCollection: data.blogPostCollection,
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      blogPostCollection: null,
      error: 'エラーが発生しました。',
    };
  }
}

export default async function Page() {
  const { blogPostCollection, error } = await getData();

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Heading as="h1" size="5xl">
        Articles
      </Heading>
      {blogPostCollection?.items.map(blogPost => (
        <Link href={`/articles/${blogPost?.sys.id}`} key={blogPost?.sys.id}>
          <div>{blogPost?.title}</div>
        </Link>
      ))}
    </>
  );
}
