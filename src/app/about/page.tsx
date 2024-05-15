'use client';

import { gql } from '@apollo/client';
import createApolloClient from '../../../apollo-client';

export async function getData() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query About {
        about(id: "") {
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

  return <main>Lorem ipsum dolor sit amet.</main>;
}
