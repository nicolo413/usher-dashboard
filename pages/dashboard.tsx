import * as React from 'react';
import VenueList from '../components/Dashboard/VenueList';
import styles from '../styles/Dashboard.module.css';
import { usePromoterContext } from '../services/contexts/UserContext';
import { useEffect } from 'react';
import { getPromoterProfile } from '../services/api/auth';
import BarChart from '../components/BarChart';
import DonutChart from '../components/DonutChart';
import { Center, HStack, Text, VStack } from 'native-base';

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
      <h2 className={styles.venueTitle}>Your Venues:</h2>
      <VenueList venues={promoter.venues} />
      <h2 className={styles.statsTitle}>Your Stats:</h2>
      <HStack>
        <Center width="300" ml="6" bg={'#FFFFFF1A'} borderRadius="12" p="3">
          <Text fontWeight="medium" color="white" fontSize={32}>
            Active events:
          </Text>
          <Text ml="6" mb="2" fontWeight="medium" color="white" fontSize={32}>
            🎭
            {
              promoter.venues.flatMap((venue) =>
                venue.events.flatMap((event) =>
                  event.shows.filter(
                    (show) => show.active_sale && Number(show.date) > Date.now()
                  )
                )
              ).length
            }
          </Text>
          <Text fontWeight="medium" color="white" fontSize={32}>
            Weekly ticket sales:
          </Text>
          <Text ml="6" mb="2" fontWeight="medium" color="white" fontSize={32}>
            🎟 {promoter.stats.week.total.sold_tickets} €
          </Text>
          <Text fontWeight="medium" color="white" fontSize={32}>
            Weekly income:
          </Text>
          <Text ml="6" mb="2" fontWeight="medium" color="white" fontSize={32}>
            💸 {promoter.stats.week.total.sales} €
          </Text>
        </Center>
        <BarChart weeklyData={promoter.stats.week.by_event} />
        <DonutChart weeklyData={promoter.stats.week.by_event} />
      </HStack>
    </div>
  );
};

export default Dashboard;
