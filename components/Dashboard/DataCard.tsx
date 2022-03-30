import { VStack, Text } from 'native-base';
import React from 'react';

import { PromoterProfile } from '../../utils/Types/userTypes';

function DataCard({ promoter }: { promoter: PromoterProfile }) {
  return (
    <VStack
      h="100%"
      width="300"
      mt="8"
      ml="10"
      bg={'#FFFFFF00'}
      borderRadius="12"
      p="3"
    >
      <Text fontWeight="medium" color="light.100" fontSize={24}>
        Active events:
      </Text>
      <Text ml="6" mb="2" fontWeight="medium" color="light.50" fontSize={32}>
        🎭 {promoter.active_events.length}
      </Text>
      <Text fontWeight="medium" color="light.100" fontSize={24}>
        Weekly ticket sales:
      </Text>
      <Text ml="6" mb="2" fontWeight="medium" color="light.50" fontSize={32}>
        🎟 {promoter.stats.week.total.sold_tickets} tickets
      </Text>
      <Text fontWeight="medium" color="light.100" fontSize={24}>
        Weekly income:
      </Text>
      <Text ml="6" mb="2" fontWeight="medium" color="light.50" fontSize={32}>
        💸 {promoter.stats.week.total.sales} €
      </Text>
    </VStack>
  );
}

export default DataCard;
