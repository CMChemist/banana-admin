import React from 'react';
import Icon from '../../Components/Icon';
import Navbar from '../../Components/Navbar';
import ApplicationCard from '../../Components/ApplicationCard';
import DonationCard from '../../Components/DonationCard';
import styles from './style.module.css';

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      {/* <Navbar /> */}
      <div className={styles.cardsContainer}>
        {/* <div className={styles.applicationContainer}>
          <h1>New Applications</h1>
          <ApplicationCard type="client" />
          <div style={{ height: 24 }} />
          <ApplicationCard type="donor" />
        </div> */}
        <div className={styles.donationContainer}>
          <h1>Donation Status</h1>
          <DonationCard className={styles.donations} totalDonation={50} claimedDonation={25} />
        </div>
      </div>
    </div>
  );
}
