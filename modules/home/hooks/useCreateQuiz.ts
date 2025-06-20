import { useEffect, useRef } from 'react';

import { QuizConfig } from '@/helpers';
import { useQuizStore } from '@/store';

export const useCreateQuiz = (quizConfig: QuizConfig) => {
  const { startQuiz } = useQuizStore();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      startQuiz(quizConfig);
      initialized.current = true;
    }
  }, [quizConfig, startQuiz]);
};
