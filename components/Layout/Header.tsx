import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Header.module.css';
import { useRouter } from 'next/router';
import * as React from 'react';
import { Button } from 'native-base';
import { usePromoterContext } from '../../services/contexts/UserContext';

const Nav = () => {
  const router = useRouter();
  const { promoter, populatePromoter } = usePromoterContext();

  const handleClick = () => {
    populatePromoter(null);
    localStorage.removeItem('promoter');
    router.push('/auth');
  };

  return (
    <header className={styles.fullHeader}>
      <h3>Hello {promoter?.name}! </h3>
      <Button variant="outlined" onPress={handleClick}>
        <p style={{ fontWeight: 'bold' }}>Logout</p>
      </Button>
    </header>
  );
};
export default Nav;
