import * as React from 'react';
import styles from '../../styles/VenueList.module.css';
import { Venue } from '../../utils/Types/dbTypes';
import VenueCard from './VenueCard';

type Props = {
  venues: Venue[];
};

const VenueList = ({ venues }: Props) => {
  return (
    <div className={styles.listContainer}>
      {venues.length
        ? venues.map((venue) => {
            return <VenueCard key={venue.id} venue={venue} />;
          })
        : null}
    </div>
  );
};

export default VenueList;
