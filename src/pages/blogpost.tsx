import React from "react"
import { graphql } from "gatsby"
import { ContentfulBlogPost } from "../../graphql-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

type BlogPost = {
  contentfulBlogPost: ContentfulBlogPost
}

const blogPostPage: React.FC<{ data: BlogPost }> = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>{ data.contentfulBlogPost.title }</h1>
    <time>{ data.contentfulBlogPost.publishDate }</time>
    <ul>
      { data.contentfulBlogPost.category?.map(item => (
        <li key={ item?.id }>{ item?.name }</li>
      )) }
    </ul>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sed ad harum culpa exercitationem maxime veritatis sunt cupiditate eaque, omnis reprehenderit nostrum reiciendis, temporibus dolore voluptates ullam magni tempore quis.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export const query = graphql`
  query {
    contentfulBlogPost {
      title
      publishDate(formatString: "YYYY年MM月DD日")
      category {
        name
        slug
        id
      }
    }
  }
`

export default blogPostPage
