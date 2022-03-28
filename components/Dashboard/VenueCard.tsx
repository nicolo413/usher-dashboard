import * as React from 'react';
import styles from '../../styles/VenueCard.module.css'
import {
  Pressable,
  VStack,
  Box,
  Text,
  HStack,
  Badge,
} from "native-base";
import Image from 'next/image';
import { Venue } from '../../utils/Types/dbTypes';

type Props = {
  venue: Venue
}

const VenueCard = ({venue} : Props) => {
  return (
      <Box width="250px" mt="20px" p="10px">
  
      <Pressable
        _pressed={{size: 0.9}}
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
          { venue.external_url ?
          <Image
          src={venue.external_url}
          alt="image base"
          height="150px"
          width="150px"
          /> : null
          }
          <HStack alignItems={"center"}>
            <VStack flex={2} mt={-4} pl={3} pr={2} pb={2} roundedBottom="md">
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
                {venue.zipcode}
              </Text> : null
              }
              { "Here comes the shows" ?
              <Box>
                {"event.today_shows.length" ? (
                  <Text color="white">{venue.address}</Text>
                  ) : null}
              </Box> : null
              }
            </VStack>
            <Text flex={1} maxHeight="100%" color="white" fontWeight="medium" fontSize="lg">
              {venue.name}
            </Text>
          </HStack>
        </Box>
      </Pressable>
      <Box position="absolute" right="40px" top="15px">
      </Box>
      </Box>  
  )
}

export default VenueCard