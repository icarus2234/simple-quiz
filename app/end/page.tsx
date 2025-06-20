import type { Metadata } from 'next';

import { quizEndPageMetaData } from '@/helpers';
import { EndTemplate } from '@/modules/end/templates/end';

export const metadata: Metadata = quizEndPageMetaData;

export default function EndPage() {
  return <EndTemplate />;
}
