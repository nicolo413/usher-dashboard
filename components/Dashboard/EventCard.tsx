import * as React from "react";
import styles from '../../styles/EventCard.module.css';
import Image from 'next/image';
import { EventType } from "../../utils/Types/dbTypes";


const EventCard = ({event}: {event?: EventType}) => {
  if (event) {

    return (
      <button className={styles.mainButton}>
      <div className={styles.card}>
        {event.poster ?
        <Image
        className={styles.image}
        src={event.poster}
        alt={`${event.name} poster`}
        width="100px"
        height="130px"
        />
        : null
        }
        <div className={styles.content}>
          <h3>
            {event.name}
          </h3>
          <h6 className={styles.description}>
            {event.description}
          </h6>
          <h6 className={styles.price}>
            {`${event.price}€`}
          </h6>
        </div>
      </div>
    </button>
  );
  }
  return (
    <button className={styles.mainButton}>
      <div className={styles.card}>
        <Image className={styles.icon} src={'/images/add-icon.png'} alt="+ icon" width="100px" height="130px"/>
        <div className={styles.content}>
          <h3>
            Add a new Event
          </h3>
        </div>
      </div>
    </button>
  )
};

export default EventCard
// export default React.memo(
//   EventCard,
//   (prev, next) => prev.event.id === next.event.id
// );
