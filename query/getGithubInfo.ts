import { GithubInfo } from 'common/types';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from '@apollo/client';

export default async (): Promise<GithubInfo> => {
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
    },
  });

  const githubClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  const { data } = await githubClient.query({
    query: gql`
      query {
        user(login: "rokoala") {
          name
          login
          twitterUsername
          email
          bio
          avatarUrl
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
                url
                languages(first: 3) {
                  edges {
                    node {
                      id
                      color
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const { user } = data;

  return {
    login: user.login,
    name: user.name,
    twitterUsername: user.twitterUsername,
    email: user.email,
    bio: user.bio,
    avatarUrl: user.avatarUrl,
    repositories: user.pinnedItems.nodes,
  };
};
