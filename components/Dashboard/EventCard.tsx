import * as React from "react";
import { Image } from "native-base";
import styles from "../../styles/EventCard.module.css";
import { EventType } from "../../utils/Types/dbTypes";
import { capitalize } from "../../utils/helpers/cards";

const EventCard = ({ event, setSelectedEvent }: { event?: EventType, setSelectedEvent: React.Dispatch<React.SetStateAction<EventType | null>> }) => {
  if (event) {
    return (
      <button className={styles.mainButton}
        onClick={() => setSelectedEvent(event)}
      >
        <div className={styles.card}>
          {event.poster ? (
            <div className={styles.image}>
              <Image
                src={event.poster}
                alt={`${event.name} poster`}
                size={"50px"}
                borderRadius={100}
              />
            </div>
          ) : null}
          <div className={styles.content}>
            <h3 className={styles.title}>{capitalize(event.name)}</h3>
          </div>
        </div>
      </button>
    );
  }
  return (
    <button className={styles.mainButton} style={{backgroundColor: '#2d3952'}}
      onClick={() => {setSelectedEvent(null)}}
    >
      <div className={styles.addCard}>
        <div className={styles.image}>
          <Image
          src="/images/plus.png"
          alt={"Add new event button"}
          height="45px"
          width="45px"
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>Add new Event</h3>
        </div>
      </div>
    </button>
  );
};

export default EventCard;
// export default React.memo(
//   EventCard,
//   (prev, next) => prev.event.id === next.event.id
// );
