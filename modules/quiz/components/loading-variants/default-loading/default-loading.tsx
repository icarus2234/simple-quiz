import { FC } from 'react';

import { useTimeout } from '@/hooks/use-timeout';
import { Typography } from '@/modules/layout';
import { SimpleList } from '@/modules/quiz/components/simple-list';
import AiIcon from '@/public/icons/ai.svg';
import CircleCheckIcon from '@/public/icons/circle-check.svg';
import GridIcon from '@/public/icons/grid.svg';
import TextIcon from '@/public/icons/text.svg';

import { LoadingProgress } from '../../loading-progress';
import styles from './default-loading.module.css';

export const listItems = [
  <div className={styles.listItem} key="1">
    <CircleCheckIcon />
    <Typography className="plusJakartaSans">
      Aligning with your goals
    </Typography>
  </div>,
  <div className={styles.listItem} key="2">
    <GridIcon />
    <Typography className="plusJakartaSans">Reviewing your answers</Typography>
  </div>,
  <div className={styles.listItem} key="3">
    <TextIcon />
    <Typography className="plusJakartaSans">
      Picking Bible verses and prayers for you
    </Typography>
  </div>,
  <div className={styles.listItem} key="4">
    <AiIcon />
    <Typography className="plusJakartaSans">
      Finalizing your personalized plan
    </Typography>
  </div>,
];

interface DefaultLoadingPageProps {
  goToNextPage: () => void;
}

export const DefaultLoadingPage: FC<DefaultLoadingPageProps> = ({
  goToNextPage,
}) => {
  useTimeout(goToNextPage, 2000);

  return (
    <>
      <Typography
        style={{
          textAlign: 'center',
          marginBottom: '32px',
        }}
        variant="heading1"
      >
        We are crafting your spiritual growth plan
      </Typography>
      <LoadingProgress
        targetPercentage={100}
        duration={2000}
        style={{ marginBottom: '36px' }}
      />
      <SimpleList items={listItems} />
    </>
  );
};
