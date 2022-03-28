import { Box, Center, FormControl, Input, Slider, VStack } from 'native-base';
import { AccessibilityInfo } from 'react-native';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function NewEventForm() {
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState({
    name: undefined,
    //price: undefined,
    //type: undefined,
    //genres: undefined,
    //image: undefined,
    //poster: undefined,
    //language: undefined,
    //duration: undefined,
    //description: undefined,
    //external_url: undefined,
    //shows: undefined,
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Center w={'75%'} h="full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack>
          <label htmlFor="name">Name</label>
          <input
            required
            {...register('name')}
            placeholder="Enter the name of your event"
          />

          <label htmlFor="price">Price</label>
          <input
            type="number"
            required
            placeholder="Enter a price per ticket (€)"
            {...register('price')}
          />

          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            required
            placeholder="Enter event duration (minutes)"
            {...register('price')}
          />

          <label htmlFor="type">Type of event</label>
          <select {...register('type')}>
            <option value="">Select a type of event</option>
            <option value="Theater">Theater</option>
            <option value="Concert">Concert</option>
            <option value="Cinema">Movie</option>
            <option value="Circus">Circus</option>
          </select>

          <label htmlFor="language">Language</label>
          <select {...register('language')}>
            <option value="">Select a language</option>
            <option value="Catalan">Catalan </option>
            <option value="Spanish ">Spanish</option>
            <option value="English">English</option>
          </select>

          <label htmlFor="description">Description</label>
          <input type="text" required {...register('description')} />

          <div>
            <input type="checkbox" id="drama" name="drama" />
            <label htmlFor="drama">Drama</label>
            <input type="checkbox" id="comedy" name="comedy" />
            <label htmlFor="comedy">Comedy</label>
            <input type="checkbox" id="musical" name="musical" />
            <label htmlFor="musical">Musical</label>
          </div>

          <label htmlFor="shows">Shows</label>

          <input type="datetime-local" />

          <button type="submit">Submit</button>
        </VStack>
      </form>
    </Center>
  );
}
