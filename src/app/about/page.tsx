// 'use client';

import type { Metadata } from 'next';
import Image from 'next/image';
import { gql } from '@apollo/client';
import createApolloClient from '../../../apollo-client';
import { css } from '../../../styled-system/css';
import { Stack } from '../../../styled-system/jsx';
import { Article } from '../../components/Article';
import { Heading } from '../../components/Heading';

export const metadata: Metadata = {
  title: 'About',
  description: '',
};

export async function getData() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query About {
        about(id: "1Q0Koa4MU3p52jL5yKvYOE") {
          profile
          site
        }
      }
    `,
  });

  return {
    props: {
      about: data,
    },
  };
}

export default async function Page() {
  const data = await getData();

  return (
    <>
      <Heading as="h1" size="5xl">
        About
      </Heading>
      <section className={css({ marginTop: 16 })}>
        {/* <Heading as="h2" size="5xl">
          This Site
        </Heading> */}
        <Article
          markdown={data.props.about.about.site}
          className={css({ marginTop: 4 })}
        />
      </section>
      <section className={css({ marginTop: 20 })}>
        {/* <Heading as="h2" size="3xl">
          Profile
        </Heading> */}
        <Stack direction="row" gap={8} className={css({ marginTop: 4 })}>
          <Image
            src="/avatar.jpg"
            alt=""
            width="120"
            height="120"
            className={css({ borderRadius: 'full' })}
          />
          <Article markdown={data.props.about.about.profile} />
        </Stack>
      </section>
    </>
  );
}
