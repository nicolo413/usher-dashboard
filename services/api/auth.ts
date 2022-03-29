import { gql, GraphQLClient } from 'graphql-request';
import { PromoterProfile } from '../../utils/Types/userTypes';

const apiURL = 'https://tourn.me/usher/api';
const client = new GraphQLClient(apiURL);

export const getPromoterProfile = async () => {
  const token = localStorage.getItem('promoter');
  if (!token) return null;
  client.setHeader('authorization', `Bearer ${token}`);

  const query = gql`
    query GetPromoter {
      getPromoter {
        promoter {
          id
          name
          email
          telephone
          stats {
            day {
              total {
                sold_tickets
                seats
              }
            }
            week {
              total {
                sales
              }
            }
            month {
              total {
                seats
              }
            }
            year {
              total {
                seats
    
              }
            }
          }
          venues {
            id
            name
            address
            zipcode
            city
            external_url
            events {
              id
              name
              price
              type
              genres
              image
              poster
              language
              duration
              description

            }
          }
        
        } 
        error
        token
      }
    }
  `;

  try {
    const { getPromoter } = await client.request(query);
    if (getPromoter.error) return getPromoter.error
    return getPromoter.promoter
  } catch (error) {
    console.error(error)
  }
}

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
            id
            name
            address
            zipcode
            city
            external_url
            events {
              id
              name
              price
              type
              genres
              image
              poster
              language
              duration
              description
              
            }
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
    mutation createPromoter($email: String! $password: String! $name: String! $telephone: Int!) {
      createPromoter(email: $email password: $password name: $name telephone: $telephone) {
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
