'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';

import { QuizConfig } from '@/helpers';
import { Button } from '@/modules/layout';

import { useCreateQuiz } from '../../hooks/useCreateQuiz';
import styles from './home-template.module.css';

interface HomeTemplateProps {
  quizConfig: QuizConfig;
}

export const HomeTemplate: FC<HomeTemplateProps> = ({ quizConfig }) => {
  const { push } = useRouter();

  useCreateQuiz(quizConfig);

  const handleStart = () => {
    push(`/${quizConfig.pages[0].id}`);
  };

  return (
    <div className={styles.homeContainer}>
      <Button onClick={handleStart}>Start</Button>
    </div>
  );
};
