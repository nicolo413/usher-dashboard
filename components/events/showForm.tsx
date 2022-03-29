import React, { useState } from 'react';
import moment from 'moment';
import {
  Box,
  Center,
  Checkbox,
  FormControl,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Switch,
} from 'native-base';

type showType = {
  date: string;
  active_sale: boolean;
  available_seats: number;
};

type showFormProps = {
  show: showType;
  setShow: React.Dispatch<React.SetStateAction<showType>>;
};

const NewShowForm = ({ show, setShow }: showFormProps) => {
  return (
    <HStack
      style={{
        width: '100%',
        marginVertical: 15,
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <FormControl.Label>Time and date</FormControl.Label>
        <input
          type="datetime-local"
          value={show.date}
          onChange={(event) => setShow({ ...show, date: event.target.value })}
          style={{
            height: 40,
            fontFamily: 'Roboto, sans-serif',
            textAlign: 'center',
          }}
        />
      </Box>

      <Box>
        <FormControl.Label>Available seats</FormControl.Label>
        <InputGroup>
          <Input
            textAlign={'right'}
            value={String(show.available_seats)}
            onChangeText={(seats: string) =>
              setShow({ ...show, available_seats: +seats })
            }
            style={{ height: 40, width: '90%' }}
          />
          <InputRightAddon>seats</InputRightAddon>
        </InputGroup>
      </Box>

      <Box alignItems="center">
        <FormControl.Label>Active sale</FormControl.Label>
        <Switch
          size="md"
          value={show.active_sale}
          onToggle={() => {
            const active_sale = !show.active_sale;
            setShow({ ...show, active_sale });
          }}
        ></Switch>
      </Box>
    </HStack>
  );
};

export default NewShowForm;
