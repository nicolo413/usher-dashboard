import * as React from "react";
import VenueList from "../components/Dashboard/VenueList";
import styles from "../styles/Dashboard.module.css";
import { usePromoterContext } from "../services/contexts/UserContext";

const Dashboard = () => {
  const { promoter, populatePromoter } = usePromoterContext();

  if (!promoter) return null;
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.venueTitle}>Your Venues:</h2>
      <VenueList venues={promoter.venues} />
      <h2 className={styles.statsTitle}>Your Stats:</h2>
    </div>
  );
};

export default Dashboard;
