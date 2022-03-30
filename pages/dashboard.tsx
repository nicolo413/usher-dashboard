import * as React from 'react';
import VenueList from '../components/Dashboard/VenueList';
import styles from '../styles/Dashboard.module.css';
import { usePromoterContext } from '../services/contexts/UserContext';
import { useEffect } from 'react';
import { getPromoterProfile } from '../services/api/auth';
import BarChart from '../components/BarChart';
import DonutChart from '../components/DonutChart';
import { Center, HStack, Text, VStack } from 'native-base';
import DataCard from '../components/Dashboard/DataCard';

const Dashboard = () => {
  const { promoter, populatePromoter } = usePromoterContext();

  useEffect(() => {
    getPromoterProfile()
      .then((prom) => {
        populatePromoter(prom);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(promoter);

  if (!promoter) return null;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardsContainer}>
        <h2 className={styles.venueTitle}>Your Venues:</h2>
        <VenueList venues={promoter.venues} />
      </div>

      <div className={styles.statsContainer}>
        <h2 className={styles.statsTitle}>Your Stats:</h2>
        <HStack alignItems="center">
          <DataCard promoter={promoter} />
          <BarChart weeklyData={promoter.stats.week.by_event} />
          <DonutChart weeklyData={promoter.stats.week.by_event} />
        </HStack>
      </div>
    </div>
  );
};

export default Dashboard;
