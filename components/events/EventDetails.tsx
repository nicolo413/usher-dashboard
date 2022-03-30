import React, { useEffect, useState } from "react";
import { EventType } from "../../utils/Types/dbTypes";
import ShowDetails from "./ShowDetails";
import ShowHeadings from "./ShowHeadings";
import styles from "../../styles/EventDetails.module.css";
import {
  Badge,
  Center,
  Heading,
  Image,
  View,
  ZStack,
  Text,
  VStack,
  HStack,
  useToken,
  Flex,
} from "native-base";
import {
  IoGlobeOutline,
  IoTimeOutline,
  IoPricetagsOutline,
  IoCalendarOutline,
} from "react-icons/io5";
import { capitalize } from "../../utils/helpers/cards";

function EventDetails({ event }: { event: EventType }) {
  const [shows, setShows] = useState(event.shows);
  const [primary, light200] = useToken("colors", ["primary.400", "light.200"]);
  useEffect(() => {
    if (event) {
      const filteredShows = event.shows
        .filter((show) => +show.date > Date.now())
        .sort((a, b) => +a.date - +b.date);
      setShows(filteredShows);
    }
  }, [event]);

  if (!event) return null;
  return (
    <Center>
      <View w={"85%"} p={"2.5%"} bg={"dark.100:alpha.50"} rounded={5} pb={24}>
        <ZStack w={"100%"} h={"230px"}>
          <Image
            src={event.image}
            w={"100%"}
            h={"100%"}
            alt={"Event hero image"}
            rounded={5}
          />
          <Badge colorScheme="tertiary" m={1}>
            {event.type}
          </Badge>
        </ZStack>
        <VStack space={6} my={4}>
          <Heading>{event.name}</Heading>
          <Text fontSize={"md"}>{event.description}</Text>
          <Flex direction={"row"} justifyContent={"space-around"}>
            <Center>
              <IoGlobeOutline
                size={"2rem"}
                title={"Language"}
                color={primary}
                style={{ cursor: "pointer" }}
              />
              <Text fontSize={"lg"} mt={3}>
                {capitalize(event.language!)}
              </Text>
            </Center>
            <Center>
              <IoTimeOutline
                size={"2rem"}
                title={"Duration"}
                color={primary}
                style={{ cursor: "pointer" }}
              />
              <Text fontSize={"lg"} mt={3}>
                {event.duration!}min
              </Text>
            </Center>
            {event.genres.length ? (
              <Center>
                <IoPricetagsOutline
                  size={"2rem"}
                  title={"Generes"}
                  color={primary}
                  style={{ cursor: "pointer" }}
                />
                {event.genres.map((gen) => (
                  <Text fontSize={"lg"} mt={3} key={gen}>
                    {capitalize(gen)}
                  </Text>
                ))}
              </Center>
            ) : null}
          </Flex>
          <Heading fontSize={"xl"}>Shows:</Heading>
        </VStack>
        <View w={"100%"}>
          {shows.map((show, index) => (
            <div key={show.id}>
              {index === 0 ? <ShowHeadings /> : null}
              <ShowDetails show={show} i={index}></ShowDetails>
            </div>
          ))}
        </View>
      </View>
    </Center>
  );
}

export default EventDetails;
