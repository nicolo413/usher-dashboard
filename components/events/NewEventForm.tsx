import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  Checkbox,
  FormControl,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Select,
  TextArea,
  VStack,
  Text,
  Flex,
} from 'native-base';
import moment from 'moment';

import NewShowForm from './showForm';
import ImagesInput from './ImagesInput';
import { uploadImage } from '../../utils/helpers/images';
import { addNewEvent } from '../../services/api/event';

const defaultState = {
  name: undefined,
  price: undefined,
  type: undefined,
  genres: undefined,
  image: undefined,
  poster: undefined,
  language: undefined,
  duration: undefined,
  description: undefined,
  external_url: undefined,
};

function showIsValid(show: showType) {
  return (
    show.available_seats > 0 &&
    show.available_seats <= 50 &&
    moment(show.date).valueOf() > Date.now()
  );
}

function NewEventForm({ venueId }: { venueId: string }) {
  const [formData, setFormData] = useState<eventDataType>(defaultState);

  const defaultShow = {
    date: moment(Date.now()).format('yyyy-MM-DDThh:mm'),
    active_sale: false,
    available_seats: 0,
  };

  const [shows, setShows] = useState<showType[]>([defaultShow]);

  const handleSubmit = () => {
    if (isValid()) {
      // Transform images to url
      if (formData.image && formData.poster) {
        const imageURL = uploadImage(formData.image, 'usher-image');
        const posterURL = uploadImage(formData.poster, 'usher-poster');
        Promise.all([imageURL, posterURL])
          .then(async (result) => {
            //@ts-ignore
            const newEvent: EventInput = {
              ...formData,
              image: result[0]!,
              poster: result[1]!,
              venue_id: venueId,
            };
            console.log(newEvent, shows);
            await addNewEvent(newEvent, shows);
          })
          .catch(console.error);
        setFormData(defaultState);
        setShows(defaultShow);
      }
      // Receive the new created event
    } else console.log('Invalid data');
  };

  const isValid = () => {
    // TODO: implement form validations
    return true;
  };

  return (
    <Flex w="full" h="100%" pb={36} overflow={'scroll'} alignItems={'center'}>
      <FormControl isRequired w={'75%'} mb="5">
        <FormControl.Label>Name</FormControl.Label>
        <Input
          isFullWidth
          size="md"
          _focus={{ borderColor: 'light.100' }}
          type="text"
          placeholder="Name"
          autoCapitalize="words"
          autoFocus
          value={formData.name}
          onChangeText={(name) => {
            setFormData((currentData) => ({ ...currentData, name }));
          }}
        />
      </FormControl>
      <FormControl isRequired w={'75%'} mb="5">
        <FormControl.Label>Event type</FormControl.Label>
        <Select
          placeholder="Select type of event"
          size="md"
          _focus={{ borderColor: 'light.100' }}
          onValueChange={(type) => {
            setFormData((currentData) => ({ ...currentData, type }));
          }}
        >
          <Select.Item label="Theater" value="THEATER" />
          <Select.Item label="Concert" value="CONCERT" />
          <Select.Item label="Cinema" value="CINEMA" />
          <Select.Item label="Circus" value="CIRCUS" />
        </Select>
      </FormControl>
      <FormControl isRequired w={'75%'} mb="5">
        <HStack justifyContent={'space-between'} mb="2">
          <VStack w="25%">
            <FormControl.Label>Price</FormControl.Label>
            <InputGroup>
              <Input
                textAlign={'right'}
                onChangeText={(price: string) => {
                  setFormData((currentData) => ({
                    ...currentData,
                    price: +price,
                  }));
                }}
                size="md"
                _focus={{ borderColor: 'light.100' }}
              />
              <InputRightAddon>€</InputRightAddon>
            </InputGroup>
          </VStack>

          <VStack w="25%">
            <FormControl.Label>Duration</FormControl.Label>

            <InputGroup>
              <Input
                size="md"
                _focus={{ borderColor: 'light.100' }}
                textAlign={'right'}
                onChangeText={(duration: string) => {
                  setFormData((currentData) => ({
                    ...currentData,
                    duration: +duration,
                  }));
                }}
              />
              <InputRightAddon>minutes</InputRightAddon>
            </InputGroup>
          </VStack>

          <VStack w="40%">
            <FormControl.Label>Language</FormControl.Label>
            <Select
              size="md"
              _focus={{ borderColor: 'light.100' }}
              placeholder="Select spoken language"
              onValueChange={(language) => {
                setFormData((currentData) => ({ ...currentData, language }));
              }}
            >
              <Select.Item label="Catalan" value="Catalan" />
              <Select.Item label="Spanish" value="Spanish" />
              <Select.Item label="English" value="English" />
              <Select.Item label="Typescript" value="English" />
            </Select>
          </VStack>
        </HStack>
      </FormControl>

      <FormControl isRequired w={'75%'} mb="5">
        <FormControl.Label>Description</FormControl.Label>

        <TextArea
          h={20}
          size="md"
          _focus={{ borderColor: 'light.100' }}
          placeholder="Event description"
          onChangeText={(description) => {
            setFormData((currentData) => ({ ...currentData, description }));
          }}
          mb="2"
        />
      </FormControl>

      <FormControl isRequired w={'75%'} mb="5">
        <FormControl.Label>Genre (pick all which apply)</FormControl.Label>
        <Checkbox.Group
          onChange={(genres) => {
            setFormData((currentData) => ({ ...currentData, genres }));
          }}
          accessibilityLabel="choose numbers"
        >
          <Box w="100%" flexDirection="row" justifyItems="space-between">
            <Box w="33%">
              <Checkbox colorScheme="dark" value="Comedy">
                Comedy
              </Checkbox>
            </Box>
            <Box w="33%">
              <Checkbox colorScheme="dark" value="Drama">
                Drama
              </Checkbox>
            </Box>
            <Box w="33%">
              <Checkbox colorScheme="dark" value="Musical">
                Musical
              </Checkbox>
            </Box>
          </Box>
        </Checkbox.Group>
      </FormControl>

      <FormControl isRequired w={'75%'} mb="5">
        <FormControl.Label>External URL</FormControl.Label>
        <Input
          isFullWidth
          size="md"
          _focus={{ borderColor: 'light.100' }}
          type="text"
          placeholder="Enter your event's site"
          value={formData.external_url}
          onChangeText={(external_url) =>
            setFormData((currentData) => ({ ...currentData, external_url }))
          }
        />
      </FormControl>

      <ImagesInput setFormData={setFormData}></ImagesInput>

      <FormControl isRequired w={'75%'} mb="10" mt="10">
        <HStack alignItems="center" justifyContent="space-between">
          <FormControl.Label mr="6">Dates</FormControl.Label>
          <Button
            colorScheme="dark"
            onPress={() => {
              if (showIsValid(shows[shows.length - 1])) {
                setShows([...shows, defaultShow]);
              }
            }}
            size="md"
            _focus={{ borderColor: 'light.100' }}
          >
            Add another date ➕
          </Button>
        </HStack>
        {shows.map((_show, index) => {
          return (
            <NewShowForm
              // show={show}
              shows={shows}
              setShows={setShows}
              index={index}
              key={index}
            />
          );
        })}
      </FormControl>

      <Button
        size="md"
        colorScheme="dark"
        _focus={{ borderColor: 'light.100' }}
        onPress={handleSubmit}
        // isLoading
        spinnerPlacement="end"
        isLoadingText="Submitting"
      >
        Submit
      </Button>
    </Flex>
  );
}

export default NewEventForm;
function loadImage() {
  throw new Error('Function not implemented.');
}
