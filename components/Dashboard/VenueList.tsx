import { HStack } from 'native-base';
import * as React from 'react';
import { useEffect } from "react"
import { Venue } from '../../utils/Types/dbTypes';
import VenueCard from "./VenueCard"

type Props = {
  venues: Venue[]
}

const VenueList = ({venues} : Props) => {
  return (
    <HStack maxWidth={"100%"} flexWrap="wrap">
      { venues.length ? (
        venues.map(venue => {
          console.log(venue);
          return <VenueCard key={venue.id} venue={venue}/>
        })) : null
      } 
    </HStack>
  )
}

export default VenueList