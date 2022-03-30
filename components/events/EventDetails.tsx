import { Center, Heading, View } from "native-base";
import React, { useEffect } from "react";
import { EventType } from "../../utils/Types/dbTypes";
import ShowDetails from "./ShowDetails";
import ShowHeadings from "./ShowHeadings";

function EventDetails({ event }: { event: EventType }) {
  //const [shows, setShows] = useState(event.shows);
  useEffect(() => {}, [event]);

  if (!event) return null;
  return (
    <Center>
      <Heading>{event.name}</Heading>
      {event.shows
        .filter((show) => +show.date > Date.now())
        .sort((a, b) => +a.date - +b.date)
        .map((show, index) => (
          <View key={show.id} w={"80%"}>
            {index === 0 ? <ShowHeadings /> : null}
            <ShowDetails show={show} i={index}></ShowDetails>
          </View>
        ))}
    </Center>
  );
}

export default EventDetails;
