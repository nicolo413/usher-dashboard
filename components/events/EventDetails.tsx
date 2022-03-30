import { Heading, View } from "native-base";
import React from "react";
import { EventType } from "../../utils/Types/dbTypes";
import ShowDetails from "./ShowDetails";

function EventDetails({ event }: { event: EventType }) {
  if (!event) return null;
  return (
    <View>
      <Heading>{event.name}</Heading>
      {event.shows.map((show) => (
        <ShowDetails show={show} key={show.id}></ShowDetails>
      ))}
    </View>
  );
}

export default EventDetails;
