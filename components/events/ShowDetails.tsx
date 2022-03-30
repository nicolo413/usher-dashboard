import moment from "moment";
import { Badge, Heading, HStack, Text } from "native-base";
import React from "react";
import { Show } from "../../utils/Types/dbTypes";

function ShowDetails({ show, i }: { show: Show; i: number }) {
  return (
    <HStack
      h={12}
      justifyContent={"space-around"}
      alignItems={"center"}
      bg={i % 2 === 0 ? "dark.100" : "dark.200"}
    >
      <Text w={"30%"}>
        {" "}
        {moment(new Date(+show.date)).format("MMMM D YYYY, H:mm")}{" "}
      </Text>
      <Badge
        w={"15%"}
        h={8}
        alignItems={"center"}
        justifyContent={"center"}
        colorScheme={show.active_sale ? "tertiary" : "secondary"}
      >
        {show.active_sale ? "Active" : "Inactive"}
      </Badge>
      <Text w={"10%"}>{show.available_seats}</Text>
      <Text w={"10%"}> {show.tickets?.length}</Text>
    </HStack>
  );
}

export default ShowDetails;
