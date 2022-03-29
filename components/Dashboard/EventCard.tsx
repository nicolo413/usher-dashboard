import * as React from "react";

import {
  Pressable,
  VStack,
  Box,
  Text,
  HStack,
  Badge,
} from "native-base";
import Image from 'next/image';
import { EventType } from "../../utils/Types/dbTypes";


const EventCard = ({event}: {event: EventType}) => {

  return (
    <Box>

<Pressable
      onPress={() => {}}
    >
      <HStack
        mb={2}
        style={{
          alignSelf: "center",
          width: "90%",
          backgroundColor: "transparent",
        }}
      >
        {event.poster ?
        <Image
        src={event.poster}
        alt={`${event.name} poster`}
        layout="fill"
        />
        : null
        }
        <VStack paddingLeft={4} paddingTop={1}>
          <Text fontSize="md" fontWeight="medium" color="white">
            {event.name}
          </Text>
          <Text fontSize="sm" fontWeight="medium" color="light.200">
            {event.description}
          </Text>
          <Text fontSize="sm" fontWeight="medium" color="white" underline>
            {`Tickets from ${event.price}€`}
          </Text>
        </VStack>
      </HStack>
    </Pressable>
    </Box>
  );
};

export default EventCard
// export default React.memo(
//   EventCard,
//   (prev, next) => prev.event.id === next.event.id
// );
