'use client';

import { gql } from '@apollo/client';
import createApolloClient from '../../../apollo-client';
import { Article } from '../../components/Article';
import { Heading } from '../../components/Heading';

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

  console.log(data);

  return {
    props: {
      about: data,
    },
  };
}

export default async function Page() {
  const data = await getData();

  console.log(data.props.about.about.profile);

  return (
    <main>
      <Heading as="h1">About</Heading>
      <Article markdown={data.props.about.about.site} />
    </main>
  );
}
