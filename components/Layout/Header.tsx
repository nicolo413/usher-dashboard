import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Header.module.css';
import { useRouter } from 'next/router';
import * as React from 'react';
import { Button } from 'native-base';

const Nav = () => {
  
  const router = useRouter();
  return (

    <header className={styles.fullHeader}>
      <Image className={styles.logo} src='/images/adaptive-icon.png' alt='usher icon' height="200px" width="200px"/>
      <Button variant="outlined"><h3 style={{color: '#FAFAFA'}}>Logout</h3></Button>
    </header>
  )
}
export default Nav;