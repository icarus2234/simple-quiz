'use client';

import { useRouter } from 'next/navigation';

import { Routes } from '@/helpers';
import { Button } from '@/modules/layout';

import styles from './end.module.css';

export const EndTemplate = () => {
  const { push } = useRouter();

  const handleEndGame = () => {
    push(Routes.Home);
  };

  return (
    <div className={styles.endContainer}>
      <Button onClick={handleEndGame}>Try again</Button>
    </div>
  );
};
