'use client';

import { FC } from 'react';

import { QuizPage } from '@/helpers';
import { Button, Typography } from '@/modules/layout';

import { ProgressChart } from '../../components/progress-chart/progress-chart';
import { useQuizPage } from '../../hooks/use-quiz-page';
import styles from './progress.module.css';
interface ProgressProps {
  pageConfig: QuizPage;
}

export const Progress: FC<ProgressProps> = ({ pageConfig }) => {
  const { goToNextPage } = useQuizPage(pageConfig);

  return (
    <div className={styles.container}>
      <div>
        <Typography className="mb-32" variant="heading1">
          See your Spiritual Growth progress by Sep 17, 2024
        </Typography>
        <ProgressChart />
      </div>
      <Button onClick={goToNextPage}>Continue</Button>
    </div>
  );
};
