import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Select,
  Slider,
  TextArea,
  VStack,
} from 'native-base';
import React, { isValidElement, useState } from 'react';
import { AccessibilityInfo } from 'react-native';

type eventDataType = {
  name: string | undefined;
  price: number | undefined;
  type: string | undefined;
  language: string | undefined;
  duration: number | undefined;
  description: string | undefined;
};

function NewEventForm() {
  const [formData, setFormData] = useState<eventDataType>({
    name: undefined,
    price: undefined,
    type: undefined,
    //genres: undefined,
    //image: undefined,
    //poster: undefined,
    language: undefined,
    duration: undefined,
    //description: undefined,
    //external_url: undefined,
    //shows: undefined,
  });

  // const handleInputChange = (event: React.ChangeEvent) => {
  //   const target = event.target;
  //   // TODO: handle different target types
  //   const value = target.value;
  //   const name = target.name;
  //   setFormData({ [name]: value });
  // };

  const handleSubmit = () => {
    if (isValid()) {
      console.log(formData);
    } else console.log('Invalid data');
  };

  const isValid = () => {
    // TODO: implement form validations
    return true;
  };

  return (
    <Center w="full" h="full">
      <FormControl isRequired w={'75%'} mb="2">
        <FormControl.Label>Name</FormControl.Label>
        <Input
          isFullWidth
          size="md"
          type="text"
          placeholder="Name"
          autoCapitalize="words"
          autoFocus
          value={formData.name}
          onChangeText={(name) => setFormData({ ...formData, name })}
        />
      </FormControl>
      <FormControl isRequired w={'75%'} mb="2">
        <FormControl.Label>Event type</FormControl.Label>
        <Select
          placeholder="Select type of event"
          onValueChange={(type) => setFormData({ ...formData, type })}
        >
          <Select.Item label="Theater" value="THEATER" />
          <Select.Item label="Concert" value="CONCERT" />
          <Select.Item label="Cinema" value="CINEMA" />
          <Select.Item label="Circus" value="CIRCUS" />
        </Select>
      </FormControl>
      <FormControl isRequired w={'75%'} mb="2">
        <HStack justifyContent={'space-between'} mb="2">
          <VStack>
            <FormControl.Label>Price</FormControl.Label>
            <InputGroup>
              <Input
                textAlign={'right'}
                onChangeText={(price: string) =>
                  setFormData({ ...formData, price: +price })
                }
              />
              <InputRightAddon>€</InputRightAddon>
            </InputGroup>
          </VStack>

          <VStack>
            <FormControl.Label>Language</FormControl.Label>
            <Select
              placeholder="Select spoken language"
              onValueChange={(language) =>
                setFormData({ ...formData, language })
              }
            >
              <Select.Item label="Catalan" value="Catalan" />
              <Select.Item label="Spanish" value="Spanish" />
              <Select.Item label="English" value="English" />
            </Select>
          </VStack>
          <VStack>
            <FormControl.Label>Duration</FormControl.Label>

            <InputGroup
              w={{
                base: '45%',
                md: '285',
              }}
            >
              <Input
                textAlign={'right'}
                w={{
                  base: '70%',
                  md: '100%',
                }}
                onChangeText={(duration: string) =>
                  setFormData({ ...formData, duration: +duration })
                }
              />
              <InputRightAddon>minutes</InputRightAddon>
            </InputGroup>
          </VStack>
        </HStack>
      </FormControl>

      <TextArea
        h={20}
        placeholder="Event descriptions"
        w="75%"
        onChangeText={(description) => {
          setFormData({ ...formData, description });
        }}
        mb="2"
      />

      <Button
        size={'md'}
        onPress={handleSubmit}
        // isLoading
        spinnerPlacement="end"
        isLoadingText="Submitting"
      >
        Submit
      </Button>
    </Center>
  );
}

export default NewEventForm;
