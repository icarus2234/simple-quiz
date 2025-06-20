import { Email } from '@/modules/quiz/templates/email';
import { Landing } from '@/modules/quiz/templates/landing';
import { LoadingPage } from '@/modules/quiz/templates/loading-page';
import { Progress } from '@/modules/quiz/templates/progress';

export const pageMapper = {
  page1: LoadingPage,
  email: Email,
  page2: Progress,
  landing: Landing,
};

export type PageMapperKeys = keyof typeof pageMapper;
