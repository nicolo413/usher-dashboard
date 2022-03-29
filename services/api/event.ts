import { gql, GraphQLClient } from 'graphql-request';

const apiURL = 'https://tourn.me/usher/api';
const client = new GraphQLClient(apiURL);

export const addNewEvent = async (event: EventInput, shows: showType[]) => {
  const token = localStorage.getItem('promoter');
  if (!token) return null;
  client.setHeader('authorization', `Bearer ${token}`);

  const mutation = gql`
    mutation Mutation($event: EventInput!, $shows: [ShowInput]!) {
      createEvent( event: $event, shows: $shows) {
        error
        event {
          name
        duration
        shows {
          date
          id
        }
      }  
    }
  }
  `;

  try {
    const { createEvent } = await client.request(mutation, { event, shows });
    console.log(createEvent)
    if (createEvent.error) return createEvent.error
    return createEvent.event
  } catch (error) {
    console.error(error)
  }
}