import { Center } from 'native-base';
import React from 'react';
import NewEventForm from '../components/events/NewEventForm';

function Events() {
  return (
    <Center mt="10">
      <h2>This is the events page</h2>
      <NewEventForm></NewEventForm>
    </Center>
  );
}

export default Events;
