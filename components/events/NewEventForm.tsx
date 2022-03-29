import React, { useState } from "react";
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
} from "native-base";
import moment from "moment";

import NewShowForm from "./showForm";
import ImagesInput from "./ImagesInput";

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

function NewEventForm() {
  const [formData, setFormData] = useState<eventDataType>(defaultState);

  const [shows, setShows] = useState<showType[]>([]);

  const [show, setShow] = useState({
    date: moment(Date.now()).format("yyyy-MM-DDThh:mm"),
    active_sale: false,
    available_seats: 0,
  });

  const handleSubmit = () => {
    if (isValid()) {
      console.log(show);
    } else console.log("Invalid data");
  };

  const isValid = () => {
    // TODO: implement form validations
    return true;
  };

  return (
    <Center w="full" h="full">
      <FormControl isRequired w={"75%"} mb="2">
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
      <FormControl isRequired w={"75%"} mb="2">
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
      <FormControl isRequired w={"75%"} mb="2">
        <HStack justifyContent={"space-between"} mb="2">
          <VStack w="25%">
            <FormControl.Label>Price</FormControl.Label>
            <InputGroup>
              <Input
                textAlign={"right"}
                onChangeText={(price: string) =>
                  setFormData({ ...formData, price: +price })
                }
              />
              <InputRightAddon>€</InputRightAddon>
            </InputGroup>
          </VStack>

          <VStack w="25%">
            <FormControl.Label>Duration</FormControl.Label>

            <InputGroup>
              <Input
                textAlign={"right"}
                onChangeText={(duration: string) =>
                  setFormData({ ...formData, duration: +duration })
                }
              />
              <InputRightAddon>minutes</InputRightAddon>
            </InputGroup>
          </VStack>

          <VStack w="40%">
            <FormControl.Label>Language</FormControl.Label>
            <Select
              size="md"
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
        </HStack>
      </FormControl>

      <FormControl isRequired w={"75%"} mb="2">
        <FormControl.Label>Description</FormControl.Label>

        <TextArea
          h={20}
          placeholder="Event description"
          onChangeText={(description) => {
            setFormData({ ...formData, description });
          }}
          mb="2"
        />
      </FormControl>

      <FormControl isRequired w={"75%"} mb="2">
        <FormControl.Label>Genre (pick all which apply)</FormControl.Label>
        <Checkbox.Group
          onChange={(genres) => setFormData({ ...formData, genres })}
          accessibilityLabel="choose numbers"
        >
          <Box w="100%" flexDirection="row" justifyItems="space-between">
            <Box w="33%">
              <Checkbox value="Comedy">Comedy</Checkbox>
            </Box>
            <Box w="33%">
              <Checkbox value="Dama">Drama</Checkbox>
            </Box>
            <Box w="33%">
              <Checkbox value="Musical">Musical</Checkbox>
            </Box>
          </Box>
        </Checkbox.Group>
      </FormControl>

      <FormControl isRequired w={"75%"} mb="2">
        <FormControl.Label>External URL</FormControl.Label>
        <Input
          isFullWidth
          size="md"
          type="text"
          placeholder="Enter your event's site"
          value={formData.external_url}
          onChangeText={(external_url) =>
            setFormData({ ...formData, external_url })
          }
        />
      </FormControl>

      <ImagesInput formData={formData} setFormData={setFormData}></ImagesInput>

      <FormControl isRequired w={"75%"} mb="2" mt="4">
        <HStack alignItems="center" justifyContent="space-between">
          <FormControl.Label mr="6">Dates</FormControl.Label>
          <Button onPress={() => console.log("adding a new date")} size={"md"}>
            Add another date ➕
          </Button>
        </HStack>
        <NewShowForm show={show} setShow={setShow} />
      </FormControl>

      <Button
        size={"md"}
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
