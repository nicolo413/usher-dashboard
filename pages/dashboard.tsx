import * as React from 'react';
import VenueList from '../components/Dashboard/VenueList';
import styles from '../styles/Dashboard.module.css';
import { usePromoterContext } from '../services/contexts/UserContext';
import { useEffect } from 'react';
import { getPromoterProfile } from '../services/api/auth';
import BarChart from '../components/BarChart';

const Dashboard = () => {
  const { promoter, populatePromoter } = usePromoterContext();

  useEffect(() => {
    getPromoterProfile()
      .then((prom) => {
        populatePromoter(prom);
      })
      .catch((error) => console.error(error));
  }, []);

  if (!promoter) return null;
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.venueTitle}>Your Venues:</h2>
      <VenueList venues={promoter.venues} />
      <h2 className={styles.statsTitle}>Your Stats:</h2>
      <BarChart weeklyData={promoter.stats.week.by_event} />
    </div>
  );
};

export default Dashboard;
