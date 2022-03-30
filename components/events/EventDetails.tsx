import React from "react";
import { EventType } from "../../utils/Types/dbTypes";
import ShowDetails from "./ShowDetails";
import ShowHeadings from "./ShowHeadings";
import styles from "../../styles/EventDetails.module.css"

function EventDetails({ event }: { event: EventType | null }) {
  if (!event) return null;
  return (
    <div className={styles.Container}>
      <h3>
          {event.name}</h3>
      <div className={styles.showsContainer}>
        {event.shows
          .filter((show) => +show.date > Date.now())
          .sort((a, b) => +a.date - +b.date)
          .map((show, index) => (
            <div key={show.id}>
              {index === 0 ? <ShowHeadings /> : null}
              <ShowDetails show={show} i={index}></ShowDetails>
            </div>
          ))}
      </div>
    </div>
  );
}

export default EventDetails;
