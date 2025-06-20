import { useRouter } from 'next/navigation';

import BackIcon from '@/public/icons/back.svg';

import styles from './back-arrow.module.css';

export const BackArrow = () => {
  const { back } = useRouter();

  return (
    <button className={styles.backButton} onClick={back}>
      <BackIcon />
    </button>
  );
};
