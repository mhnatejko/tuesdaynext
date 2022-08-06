import type { NextPage } from 'next';
// import Head from 'next/head';
// import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import HomeView from '../views/Home/Home';

const Home: NextPage = () => {
  return (
    <HomeView />
    // <div className={styles.index_container}>
    //   the app
    //   <Link href='/page'>
    //     <a>page</a>
    //   </Link>
    // </div>
  );
};

export default Home;
