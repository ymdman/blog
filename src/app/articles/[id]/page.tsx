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

export const metadata: Metadata = {
  title: 'Articles',
  description: '',
};

export async function getData(id: string) {
  const client = createApolloClient();

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
    props: {
      blogPost: data,
    },
  };
}

type Params = {
  params: { id: string };
};

export default async function Page(params: Params) {
  const data = await getData(params.params.id);

  return (
    <>
      <Heading as="h1" size="5xl">
        Articles
      </Heading>
      <Article markdown={data.props.blogPost.blogPost.content} />
    </>
  );
}
