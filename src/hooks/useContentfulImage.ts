import { useStaticQuery, graphql } from 'gatsby';
import { ContentfulAsset } from '../../graphql-types';

export default (assetUrl: string) => {
  const { allContentfulAsset } = useStaticQuery(graphql`
    query {
      allContentfulAsset {
        nodes {
          file {
            url
          }
          fluid(maxWidth: 300) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  `);

  return allContentfulAsset.nodes.find(
    (n: ContentfulAsset) => n.file?.url === assetUrl
  ).fluid;
};
