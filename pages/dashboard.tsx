import * as React from 'react';
import { useContext, useEffect } from 'react';
import VenueList from '../components/Dashboard/VenueList';
import { getPromoterProfile } from '../services/api/auth';
import { PromoterContext } from '../services/contexts/UserContext';

const Dashboard = () => {
  //@ts-ignore
  const {promoter, setPromoter} = useContext(PromoterContext);

  useEffect(() => {
    getPromoterProfile().then(setPromoter);
  }, [])
  console.log(promoter);
  return (
  <div>
    { promoter ?
    <VenueList venues={promoter.venues}/>
    : null
    }
  </div>
  )
}

export default Dashboard