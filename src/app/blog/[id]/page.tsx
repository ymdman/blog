// 'use client';

import type { Metadata } from 'next';

import Image from 'next/image';
import { gql } from '@apollo/client';
import createApolloClient from '../../../../apollo-client';
import { css } from '../../../styled-system/css';
import { Stack } from '../../../styled-system/jsx';
import { Article } from '../../../components/Article';
import { Heading } from '../../../components/Heading';
import Link from 'next/link';

type Params = {
  params: { id: string };
};

export async function generateMetadata({ params }: Params) {
  const { blogPost } = await fetchBlogPostData(params.id);

  const metadata: Metadata = {
    title: blogPost.title,
    description: '',
  };

  return metadata;
}

export async function fetchBlogPostData(id: string) {
  const client = createApolloClient();

  try {
    const { data } = await client.query({
      query: gql`
        query BlogPost {
          blogPost(id: "${id}") {
            title
            content
          }
        }
      `,
    });

    return {
      blogPost: data.blogPost,
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      blogPost: null,
      error: 'エラーが発生しました。',
    };
  }
}

export default async function Page({ params }: Params) {
  console.log();

  const { blogPost, error } = await fetchBlogPostData(params.id);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Heading as="h1" size="5xl">
        {blogPost.title}
      </Heading>
      <Article markdown={blogPost.content} />
    </>
  );
}
