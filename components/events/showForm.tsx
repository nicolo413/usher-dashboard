import React, { useState } from 'react';
import moment from 'moment';
import {
  Center,
  FormControl,
  Input,
  InputGroup,
  InputRightAddon,
  Switch,
} from 'native-base';

const NewShowForm = () => {
  const [show, setShow] = useState({
    date: '',
    active_sale: false,
    available_seats: 0,
  });

  return (
    <Center
      style={{
        width: 240,
        backgroundColor: 'red',
        borderRadius: 12,
        shadowOffset: { width: 4, height: 4 },
        shadowColor: 'lightgray',
        shadowOpacity: 0.2,
        padding: 5,
        marginBottom: 15,
      }}
    >
      <FormControl.Label>Time and date</FormControl.Label>
      <input
        type="datetime-local"
        value={moment(Date.now()).format('yyyy-MM-DDThh:mm')}
        onChange={(event) => setShow({ ...show, date: event.target.value })}
        style={{
          height: 40,
          width: '90%',
          fontFamily: 'Roboto, sans-serif',
          textAlign: 'center',
        }}
      />

      <FormControl.Label>Available seats</FormControl.Label>
      <InputGroup>
        <Input
          textAlign={'right'}
          onChangeText={(seats: string) =>
            setShow({ ...show, available_seats: +seats })
          }
          style={{ height: 40, width: '90%' }}
        />
        <InputRightAddon>seats</InputRightAddon>
      </InputGroup>

      <FormControl.Label>Active sale</FormControl.Label>
      <Switch size="md"></Switch>
    </Center>
  );
};

export default NewShowForm;
