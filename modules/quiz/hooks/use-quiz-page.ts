'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';

import { PageTypes, QuizPage, Routes } from '@/helpers';
import { sendResults } from '@/helpers/fetch-instance';
import { useQuizStore } from '@/store';

export const useQuizPage = (pageConfig: QuizPage) => {
  const { push, prefetch } = useRouter();
  const { setResults, quizResults } = useQuizStore();
  const { nextPageId, pageType, pageData } = pageConfig;
  const isResultsSended = useRef(false);

  const goToNextPage = useCallback(() => {
    push(`${nextPageId ? `/${nextPageId}` : Routes.End}`);
  }, [nextPageId, push]);

  useEffect(() => {
    if (pageType === PageTypes.Landing && !isResultsSended.current) {
      sendResults(quizResults);
      isResultsSended.current = true;
    }
  }, [pageType, quizResults]);

  useEffect(() => {
    prefetch(`/${nextPageId}`);
  }, [nextPageId, prefetch]);

  return {
    pageData,
    goToNextPage,
    setResults,
  };
};
