import { Box, Button, Flex, FormControl, Image, VStack } from "native-base";
import React, { useState } from "react";

type Props = {
  setFormData: React.Dispatch<React.SetStateAction<eventDataType>>;
};

function ImagesInput({ setFormData }: Props) {
  const [poster, setPoster] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      switch (event.target.name) {
        case "image":
          setImage(URL.createObjectURL(file));
          setFormData((currentData) => ({ ...currentData, image: file }));
          break;
        case "poster":
          setPoster(URL.createObjectURL(file));
          setFormData((currentData) => ({ ...currentData, poster: file }));
          break;
      }
    }
  };

  return (
    <FormControl isRequired w={"75%"} my="5">
      <FormControl.Label>
        Images: (select a file for each image format)
      </FormControl.Label>
      <Flex direction="row" justifyContent={"space-around"}>
        <input
          type="file"
          name="poster"
          style={{ display: "none" }}
          id="contained-poster-file"
          onChange={changeHandler}
        />
        <input
          type="file"
          name="image"
          style={{ display: "none" }}
          id="contained-image-file"
          onChange={changeHandler}
        />
        <VStack space={3} mt={2}>
          <label htmlFor="contained-poster-file">
            <Button>Poster</Button>
          </label>
          {poster ? (
            <Image
              src={poster}
              size={"xl"}
              alt={"Selected poster image"}
            ></Image>
          ) : null}
        </VStack>
        <VStack space={3} mt={2}>
          <label htmlFor="contained-image-file">
            <Button>Image</Button>
          </label>
          {image ? (
            <Image
              src={image}
              size={"xl"}
              alt={"Selected poster image"}
            ></Image>
          ) : null}
        </VStack>
      </Flex>
    </FormControl>
  );
}

export default ImagesInput;
