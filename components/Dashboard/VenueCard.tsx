import * as React from 'react';
import styles from '../../styles/VenueCard.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Venue } from '../../utils/Types/dbTypes';
import { useRouter } from 'next/router';

type Props = {
  venue: Venue;
};

const VenueCard = ({ venue }: Props) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button className={styles.card}>
        <Link href={`/${venue.id}`} passHref>
          <div>
            <div>
              {venue.external_url ? (
                <Image
                  className={styles.venueImage}
                  src={venue.external_url}
                  alt="Venue image"
                  width="310px"
                  height="130px"
                />
              ) : null}
            </div>
            <div className={styles.venueContent}>
              <div>
                <h3 className={styles.venueTitle}>{venue.name}</h3>
                <p className={styles.address}>{venue.address}</p>
              </div>
              <div className={styles.badge}>THEATER</div>
            </div>
          </div>
        </Link>
      </button>
    </div>
  );
};

export default VenueCard;
