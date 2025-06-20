import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { quizConfig } from '@/helpers';
import { quizMetadata } from '@/helpers/metadata-content';
import { pageMapper, PageMapperKeys } from '@/helpers/page-mapper';

export const metadata: Metadata = quizMetadata;

interface QuizPageProps {
  params: {
    pageId: string;
  };
}

export default function QuizPage({ params }: QuizPageProps) {
  const { pageId } = params;

  const pageConfig = quizConfig.pages.find(({ id }) => id === pageId);

  if (!pageConfig) {
    return notFound();
  }

  const PageComponent = pageMapper[pageId as PageMapperKeys] || notFound;

  return <PageComponent pageConfig={pageConfig} />;
}
