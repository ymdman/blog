import type { Metadata } from 'next';
import { gql } from '@apollo/client';
import createApolloClient from '../../../../apollo-client';
import { Article } from '../../../components/Article';
import { Heading } from '../../../components/Heading';

type BlogPostData = {
  blogPost: {
    title: string;
    content: string;
  } | null;
  error?: string;
};

async function fetchBlogPostData(id: string): Promise<BlogPostData> {
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

type Params = {
  params: { id: string };
};

export async function generateMetadata({ params }: Params) {
  const { blogPost } = await fetchBlogPostData(params.id);

  const metadata: Metadata = {
    title: blogPost?.title,
    description: '',
  };

  return metadata;
}

export default async function Page({ params }: Params) {
  const { blogPost, error } = await fetchBlogPostData(params.id);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Heading as="h1" size="5xl">
        {blogPost?.title}
      </Heading>
      <Article markdown={blogPost?.content ?? ''} />
    </>
  );
}
