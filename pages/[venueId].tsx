import EventCard from "../components/Dashboard/EventCard";
import { Venue } from "../utils/Types/dbTypes";
import * as React from "react";
import styles from "../styles/VenuePage.module.css";
import NewEventForm from "../components/events/NewEventForm";
import { getVenueInfo } from "../services/api/venues";
import { GetServerSideProps } from "next";
import EventDetails from "../components/events/EventDetails";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const venueId = query.venueId;
  if (venueId) {
    const venue = await getVenueInfo(venueId as string);
    return {
      props: { venue },
    };
  }
  return {
    props: { venue: null },
  };
};

const EventsPage = ({ venue }: { venue: Venue | null }) => {
  if (venue) {
    return (
      <div className={styles.mainContainer}>
        <h2>Events at {venue.name}:</h2>
        <div className={styles.container}>
          <div className={styles.eventList}>
            <EventCard key={"addNew"} />
            {venue.events && venue.events.length
              ? venue.events.map((event) => {
                  return <EventCard key={event.id} event={event} />;
                })
              : null}
          </div>
          <div className={styles.formContainer}>
            {!venue ? <NewEventForm venueId={venue.id as string} /> : null}
            {venue ? <EventDetails event={venue.events[0]} /> : null}
          </div>
        </div>
      </div>
    );
  } else {
    return <div>No venue associated with the provided Id</div>;
  }
};

export default EventsPage;
