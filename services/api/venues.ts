import { gql, GraphQLClient } from 'graphql-request';

const apiURL = 'https://tourn.me/usher/api';
const client = new GraphQLClient(apiURL);

export const getVenueInfo = async (venueId: string) => {
  const query = gql`
    query GetVenueInfo($venueId: String) {
      getVenueInfo(id: $venueId) {
        error
        venue {
          id
          name
          address
          city
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
            external_url
            shows {
              id
              date
              active_sale
              available_seats
              tickets {
                used
              }
            }
          }
        }
      }
    }
    `

  try {
    const { getVenueInfo } = await client.request(query, { venueId });
    if (getVenueInfo.error) return getVenueInfo.error
    return getVenueInfo.venue
  } catch (error) {
    console.error(error)
  }
}