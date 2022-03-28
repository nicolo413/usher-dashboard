import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Sidebar.module.css';
import { useRouter } from 'next/router';
import * as React from 'react';

const Sidebar = () => {
  const router = useRouter();
  return (
    <aside className={styles.fullSidebar}>
      
    </aside>
  )
}

export default Sidebar;