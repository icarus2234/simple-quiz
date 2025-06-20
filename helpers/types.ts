export enum Routes {
  Home = '/',
  Quiz = '/quiz',
  End = '/end',
}

export enum PageTypes {
  Info = 'info',
  MultiChoice = 'multi-choice',
  SingleChoice = 'single-choice',
  Email = 'email',
  Landing = 'landing',
}

export type AnswerValues = string | number | object | boolean;

export type Answer = {
  id: string;
  label?: string;
  value?: AnswerValues;
  nextPageId?: string;
  dataItemName?: string;
};

export type QuizPage = {
  id: string;
  pageType: PageTypes;
  pageData?: Record<string, unknown>;
  nextPageId?: string;
  answers?: Answer[];
};

export type QuizConfig = {
  id: string;
  pages: QuizPage[];
};

export type PlanOption = {
  label: string;
  value: string;
  price: number;
  popular?: boolean;
};

export interface Review {
  id?: string;
  author: string;
  dateTime: string;
  reviewText: string;
  rating: number;
}
