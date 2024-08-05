import type { Metadata } from 'next';
import Image from 'next/image';
import { gql } from '@apollo/client';
import createApolloClient from '../../../apollo-client';
import { css } from '../../../styled-system/css';
import { Stack } from '../../../styled-system/jsx';
import { Article } from '../../components/Article';
import { Heading } from '../../components/Heading';
import { About as PageAboutData } from '../../../src/gql/graphql';

export const metadata: Metadata = {
  title: 'About',
  description: '',
};

type AboutData = {
  about: PageAboutData | null;
  error?: string;
};

async function fetchAboutData(): Promise<AboutData> {
  const client = createApolloClient();

  try {
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
      about: data.about,
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      about: null,
      error: 'エラーが発生しました。',
    };
  }
}

export default async function Page() {
  const { about, error } = await fetchAboutData();

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Heading as="h1" size="5xl">
        About
      </Heading>
      <section className={css({ marginTop: 16 })}>
        <Heading as="h2" size="5xl">
          This Site
        </Heading>
        <Article
          markdown={about?.site ?? ''}
          className={css({ marginTop: 4 })}
        />
      </section>
      <section className={css({ marginTop: 20 })}>
        <Heading as="h2" size="3xl">
          Profile
        </Heading>
        <Stack direction="row" gap={8} className={css({ marginTop: 4 })}>
          <Image
            src="/avatar.jpg"
            alt=""
            width="120"
            height="120"
            className={css({ borderRadius: 'full' })}
          />
          <Article markdown={about?.profile ?? ''} />
        </Stack>
      </section>
    </>
  );
}
