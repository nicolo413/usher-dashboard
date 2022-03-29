import EventCard from "../components/Dashboard/EventCard";
import { EventType } from "../utils/Types/dbTypes";
import * as React from 'react';
import { PromoterContext } from "../services/contexts/UserContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import styles from '../styles/VenuePage.module.css'
import NewEventForm from "../components/events/NewEventForm";

const EventsPage = () => {
  const router = useRouter();
  const {promoter, populatePromoter} = useContext(PromoterContext);
  console.log(promoter);
  const { venueId } = router.query;
  const venue = promoter?.venues.find(venue => venue.id === venueId);
  console.log(venue?.events);
  if (venue) {
    return (
      <div className={styles.container}>
        <div className={styles.eventList}>
        { (venue.events && venue.events.length) ? 
          (
            venue.events.map(event => {
              return <EventCard key={event.id} event={event}/>
            })
            )
            : null}
        </div>
        <div>
          <NewEventForm />
        </div>
        </div>
  )
  } else {
    return <div>No venue associated with the provided Id</div>
  }
}

export default EventsPage