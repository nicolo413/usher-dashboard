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
import { right } from '@cloudinary/url-gen/qualifiers/textAlignment';
import styles from '../../styles/NewShowForm.module.css';

type showFormProps = {
  shows: showType[];
  setShows: React.Dispatch<React.SetStateAction<showType[]>>;
  index: number;
};

const NewShowForm = ({ shows, setShows, index }: showFormProps) => {
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
          value={shows[index].date}
          onChange={(event) => {
            const updatedShow = { ...shows[index], date: event.target.value };
            const updatedShows = shows.map((show, idx) => {
              if (idx === index) return updatedShow;
              return show;
            });
            setShows(updatedShows);
          }}
          // className={styles.inputClass}
          style={{
            height: 40,
            fontFamily: 'Roboto, sans-serif',
            textAlign: 'center',
            backgroundColor: 'transparent',
            WebkitAppearance: 'none',
            border: '1px solid #737373',
            borderRadius: 6,
            color: '#d9d9d9',
            outline: 'none',
          }}
        />
      </Box>

      <Box>
        <FormControl.Label>Available seats</FormControl.Label>
        <InputGroup>
          <input
            min={1}
            type={'number'}
            style={{
              backgroundColor: 'transparent',
              WebkitAppearance: 'none',
              border: '1px solid #737373',
              borderTopLeftRadius: 6,
              borderBottomLeftRadius: 6,
              color: '#d9d9d9',
              textAlign: 'right',
              height: 40,
              outline: 'none',
              userSelect: 'none',
              width: '90%',
            }}
            value={String(shows[index].available_seats)}
            onChange={(seats) => {
              const updatedShow = {
                ...shows[index],
                available_seats: +seats.target.value,
              };
              const updatedShows = shows.map((show, idx) => {
                if (idx === index) return updatedShow;
                return show;
              });
              setShows(updatedShows);
            }}
          />
          <InputRightAddon>seats</InputRightAddon>
        </InputGroup>
      </Box>

      <Box alignItems="center">
        <FormControl.Label>Active sale</FormControl.Label>
        <Switch
          colorScheme="light"
          size="md"
          value={shows[index].active_sale}
          onToggle={() => {
            const active_sale = !shows[index].active_sale;
            const updatedShow = { ...shows[index], active_sale };
            const updatedShows = shows.map((show, idx) => {
              if (idx === index) return updatedShow;
              return show;
            });
            setShows(updatedShows);
          }}
        ></Switch>
      </Box>
    </HStack>
  );
};

export default NewShowForm;
