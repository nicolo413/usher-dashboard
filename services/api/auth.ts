import { gql, GraphQLClient } from 'graphql-request';

const apiURL = 'https://tourn.me/usher/api';
const client = new GraphQLClient(apiURL);

export const getJWT = async (
  email: string,
  password: string
): Promise<PromoterProfile | string | null> => {
  const query = gql`
    query getPromoter($email: String, $password: String) {
      getPromoter(email: $email, password: $password) {
        promoter {
          id
          name
          email
          telephone
          venues {
            name
          }
        }
        error
        token
      }
    }
  `;

  try {
    const { getPromoter } = await client.request(query, { email, password });
    if (getPromoter.error) return getPromoter.error;
    localStorage.setItem('promoter', getPromoter.token);
    return getPromoter.promoter;
  } catch (e) {
    return 'Internal error';
  }
};

export const createPromoter = async (email: string, password: string, name: string, telephone: number) => {
  const mutation = gql`
    mutation createPromoter($email: String! $password: String! $name: String! $telephone: Number!) {
      createPromoter(email: $email password: $password name: $firstName telephone: $lastName) {
        promoter {
          id
          name
          email
          telephone
          venues {
            name
          }
        }
        error
        token
      }
    }
  `;

  try {
    const { createPromoter } = await client.request(mutation, { email, password, name, telephone });
    if (createPromoter.error) return createPromoter.error as string
    localStorage.setItem('promoter', createPromoter.token);

    return createPromoter.promoter as PromoterProfile;
  } catch (e) {
    return 'Network error while creating a new user';
  }
};
