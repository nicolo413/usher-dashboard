import { Box, Center, FormControl, Input, Slider } from 'native-base';
import React, { useState } from 'react';
import { AccessibilityInfo } from 'react-native';

function NewEventForm() {
  const [formData, setFormData] = useState({
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
    shows: undefined,
  });

  return (
    <Center w={'75%'} h="full">
      <FormControl isRequired>
        <FormControl.Label>Event name</FormControl.Label>
        <Input
          type="text"
          placeholder="Event name"
          autoCapitalize="words"
          autoFocus
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData })}
        />
        <FormControl.ErrorMessage>
          Event name is required.
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl isRequired>
        <FormControl.Label>Event description</FormControl.Label>
        <Input
          isRequired
          type="text"
          placeholder="Provide a brief description of your event"
          autoCapitalize="sentences"
          autoFocus
        />
        <FormControl.ErrorMessage>
          Event description is required.
        </FormControl.ErrorMessage>
        <Slider
          minValue={0}
          maxValue={50}
          step={1}
          accessibilityLabel="Price selector slider"
          defaultValue={20}
          size="md"
        >
          <FormControl.Label>Price per ticket</FormControl.Label>

          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb mb={-7} />
        </Slider>
      </FormControl>
    </Center>
  );
}

export default NewEventForm;
