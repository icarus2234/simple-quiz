import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { QuizConfig } from '@/helpers/types';

type QuizState = {
  quizConfig: QuizConfig;
  quizResults?: Record<string, unknown>;
};

type QuizActions = {
  startQuiz: (config: QuizConfig) => void;
  setResults: (data: object) => void;
};

export const useQuizStore = create<QuizState & QuizActions>()(
  devtools(
    persist(
      (set) => ({
        quizConfig: {
          id: '',
          pages: [],
        },
        quizResults: {}, // Initialize quizResults
        startQuiz: (config) =>
          set((state) => ({ ...state, quizConfig: config })),
        setResults: (data: object) =>
          set((state) => ({
            ...state,
            quizResults: { ...state.quizResults, ...data },
          })),
      }),
      {
        name: 'quiz-store',
      }
    )
  )
);
