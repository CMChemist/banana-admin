import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import CurrentTimeAndDate from '../CurrentTimeAndDate';

function DonationCard(props) {
  // eslint-disable-next-line no-unused-vars
  const { totalDonation, claimedDonation } = props;
  const fractionClaimed = (claimedDonation / totalDonation);
  const percentClaimed = fractionClaimed * 100;
  return (
    <div className={styles.container}>
      <div className={styles.claimedProgress}>
        <div className={styles.percentClaimed}>
          {percentClaimed}
          %
        </div>
        <div>
          <progress className={styles.progressBar} max={1} value={fractionClaimed} />
        </div>
        <CurrentTimeAndDate style={{ color: 'grey' }} />
      </div>
      <div className={styles.divider} />
      <div>
        <div className={styles.claimedContainer}>
          <div className={styles.text}>
            CLAIMED TOTAL
          </div>
          <div className={styles.claimedTotal}>
            {claimedDonation.toLocaleString(undefined, { minimumIntegerDigits: 2, useGrouping: false })}
          </div>
        </div>
        <div className={styles.activeContainer}>
          <div className={styles.text}>
            ACTIVE TOTAL
          </div>
          <div className={styles.activeTotal}>
            {totalDonation.toLocaleString(undefined, { minimumIntegerDigits: 2, useGrouping: false })}
          </div>
        </div>
      </div>
    </div>
  );
}

DonationCard.propTypes = {
  totalDonation: PropTypes.number.isRequired,
  claimedDonation: PropTypes.number.isRequired,
};

DonationCard.defaultProps = {
};

export default DonationCard;
