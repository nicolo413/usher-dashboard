import * as React from 'react';
import { useContext, useEffect } from 'react';
import VenueList from '../components/Dashboard/VenueList';
import styles from '../styles/Dashboard.module.css';
import { getPromoterProfile } from '../services/api/auth';
import { usePromoterContext } from '../services/contexts/UserContext';
import BarChart from '../components/BarChart';

const Dashboard = () => {
  //@ts-ignore
  const { promoter, populatePromoter } = usePromoterContext();

  useEffect(() => {
    getPromoterProfile().then(populatePromoter);
  }, []);
  console.log(promoter);
  return (
    <div className={styles.mainContainer}>
      {promoter ? (
        <div>
          <VenueList venues={promoter.venues} />
          <BarChart weeklyData={promoter.stats.week.by_event} />
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;
