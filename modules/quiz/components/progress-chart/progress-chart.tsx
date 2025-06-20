import Image from 'next/image';

import AxisImage from '@/public/images/axis.png';
import ChartImage from '@/public/images/progress-chart.png';

import styles from './progress-chart.module.css';

export const ProgressChart = () => {
  return (
    <div className={styles.chartContainer}>
      <div className={styles.endBox}>Jul 12 2025</div>
      <div className={styles.revealWrapper}>
        <Image
          src={AxisImage}
          priority
          alt="Progress axis"
          width={342}
          height={238}
        />
        <Image
          src={ChartImage}
          width={276}
          height={238}
          alt="Progress chart"
          className={styles.revealImage}
        />
      </div>
      <div className={styles.startBox}>Now</div>
    </div>
  );
};
