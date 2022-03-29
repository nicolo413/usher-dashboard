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
        <button className={styles.card}>
      <Link href={`/${venue.id}`} passHref>
          <div>
            <div>
              {venue.external_url ?
                <Image src={venue.external_url} alt="Venue image" width="230px" height="100px" />
                : null
              }
            </div>
            <div>
              <div>
                <h3>
                  {venue.name}
                </h3>
                <p>
                  {venue.address}
                </p>
              </div>
              <div>
                {venue.zipcode}
              </div>
            </div>
            <hr />
          </div>

      </Link>
        </button>
    </div>
  )
}

export default VenueCard