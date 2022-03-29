import * as React from "react";
import { Image } from "native-base";
import styles from "../../styles/EventCard.module.css";
import { EventType } from "../../utils/Types/dbTypes";
import { capitalize } from "../../utils/helpers/cards";

const EventCard = ({ event }: { event?: EventType }) => {
  if (event) {
    return (
      <button className={styles.mainButton}>
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
  return null;
};

export default EventCard;
// export default React.memo(
//   EventCard,
//   (prev, next) => prev.event.id === next.event.id
// );
