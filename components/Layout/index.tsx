import { useRouter } from 'next/router';
import * as React from 'react';
import Nav from "./Header";
import Sidebar from "./Sidebar";
import styles from '../../styles/Layout.module.css';

type LayoutProps = {
  children: any
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  if (router.route === '/auth') return <main>{children}</main>
  return (
    <>
      <Nav />
      <div className={styles.mainContainer}>
        <Sidebar />
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout;