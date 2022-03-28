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


const EventCard = ({ }) => {

  return (
    <Box>

    <Pressable
      onPress={() => {}}
      >
      <Box
        alignSelf={'center'}
        bgColor={"dark.50:alpha.40"}
        shadow={2}
        p={1}
        mb={4}
        rounded="lg"
        w="90%"
        >
        <Image
          src={'/../public/images/adaptive-icon.png'}
          alt="image base"
          height="150px"
          width="150px"
          />
        <HStack alignItems={"center"}>
          <VStack flex={4} mt={-4} pl={3} pr={2} pb={2} roundedBottom="md">
            <Badge
              w={20}
              bg="tertiary.700"
              left={2}
              top={-2}
              position="absolute"
              >
              <Text color="white" fontSize="xs" fontWeight={"medium"}>
                Theater
              </Text>
            </Badge>
            <Text color="white" fontWeight="medium" fontSize="md">
              Now
            </Text>
            {"Teatre misco" ?
            <Text color="light.200" fontWeight="medium" fontSize="sm">
              Or not now
            </Text> : null
            }
            { "Here comes the shows" ?
            <Box>
              {"event.today_shows.length" ? (
                <Text color="white">Today at</Text>
                ) : null}
            </Box> : null
            }
          </VStack>
          <Text flex={1} color="white" fontWeight="medium" fontSize="lg">
            {"event.price"}€
          </Text>
        </HStack>
      </Box>
    </Pressable>
    <Box position="absolute" right="40px" top="15px">
    </Box>
    </Box>
  );
};

export default EventCard
// export default React.memo(
//   EventCard,
//   (prev, next) => prev.event.id === next.event.id
// );
