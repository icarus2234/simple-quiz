import { reviewList } from './constants';
import { PageTypes, QuizConfig } from './types';

export const quizConfig: QuizConfig = {
  id: 'simple-quiz',
  pages: [
    {
      id: 'page1',
      pageType: PageTypes.Info,
      nextPageId: 'email',
      answers: [],
    },
    {
      id: 'email',
      pageType: PageTypes.Info,
      nextPageId: 'page2',
      answers: [],
    },
    {
      id: 'page2',
      pageType: PageTypes.Info,
      nextPageId: 'landing',
      answers: [],
    },
    {
      id: 'landing',
      pageType: PageTypes.Landing,
      pageData: {
        reviews: reviewList,
        planOptions: [
          { label: '1-Month Plan', value: 'planId1', price: 10 },
          { label: '3-Month Plan', value: 'planId2', price: 30, popular: true },
          { label: '6-Month Plan', value: 'planId3', price: 60 },
        ],
      },
      answers: [],
    },
  ],
};
