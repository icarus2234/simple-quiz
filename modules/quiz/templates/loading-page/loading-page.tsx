'use client';

import { FC } from 'react';

import { QuizPage } from '@/helpers';

import { DefaultLoadingPage } from '../../components/loading-variants/default-loading/default-loading';
import { useQuizPage } from '../../hooks/use-quiz-page';

interface ProgressLoadingProps {
  pageConfig: QuizPage;
}

export const LoadingPage: FC<ProgressLoadingProps> = ({ pageConfig }) => {
  const { goToNextPage } = useQuizPage(pageConfig);

  return <DefaultLoadingPage goToNextPage={goToNextPage} />;
};
