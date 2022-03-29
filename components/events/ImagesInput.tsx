import { Box } from "native-base";
import React, { useState } from "react";
import { uploadImage } from "../../utils/helpers/images";

function ImagesInput({ formData, setFormData }) {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
      setIsSelected(true);
    }
  };

  return (
    <Box w="75%" my={5}>
      <input type="file" name="file" onChange={changeHandler} />
      {isSelected ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{" "}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <div>
        <button onClick={() => uploadImage(selectedFile, "usher-poster")}>
          Submit
        </button>
      </div>
    </Box>
  );
}

export default ImagesInput;
