import * as React from 'react';
import styles from '../../styles/VenueCard.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { Venue } from '../../utils/Types/dbTypes';
import { useRouter } from 'next/router';

type Props = {
  venue: Venue
}

const VenueCard = ({ venue }: Props) => {
  console.log(venue);
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Link href={`/${venue.id}`} passHref>
        <button>
          <div className={styles.card}>
            <div className={styles.image}>
              {venue.external_url ?
                <Image className={styles.equilibrium} src={venue.external_url} alt="Venue image" width="230px" height="100px" />
                : null
              }
            </div>
            <div className={styles.content}>
              <div className={styles.mainContent}>
                <h3>
                  {venue.name}
                </h3>
                <p>
                  {venue.address}
                </p>
              </div>
              <div className={styles.features}>
                {venue.zipcode}
              </div>
            </div>
            <hr />
          </div>

        </button>
      </Link>
    </div>
  )
}

export default VenueCard