import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Project } from 'common/types';

export default async (): Promise<Project[]> => {
  const client = new ApolloClient({
    uri: 'https://rokoala-portfolio.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
  });

  const resp = await client.query({
    query: gql`
      query {
        Projects {
          id
          image_url
          link
          subtitle
          title
          position
          init_date
          end_date
        }
      }
    `,
  });

  return resp.data.Projects;
};
