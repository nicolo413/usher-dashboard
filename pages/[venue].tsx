import EventCard from "../components/Dashboard/EventCard";
import { EventType } from "../utils/Types/dbTypes";
import * as React from 'react';
import { PromoterContext } from "../services/contexts/UserContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

const EventsPage = ({events}: {events: EventType[]}) => {
  const router = useRouter();
  //@ts-ignore
  const {promoter, setPromoter} = useContext(PromoterContext);
  console.log(promoter);
  const { venue } = router.query;
  return (
    <div>
      { (events && events.length) ? 
        (
          events.map(event => {
          return <EventCard key={event.id} event={event}/>
        })
        )
      : null}
    </div>
  )
}

export default EventsPage