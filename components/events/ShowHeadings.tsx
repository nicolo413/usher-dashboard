import { HStack, Text } from "native-base";
import React from "react";

function ShowHeadings() {
  return (
    <HStack h={8} justifyContent={"space-around"} alignItems={"center"}>
      <Text w={"30%"}>Date:</Text>
      <Text w={"15%"}>Status:</Text>
      <Text w={"10%"}>Seats:</Text>
      <Text w={"10%"}>Sold:</Text>
    </HStack>
  );
}

export default ShowHeadings;
