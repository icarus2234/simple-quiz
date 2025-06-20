'use client';

import { FC } from 'react';

import { PlanOption, QuizPage, Review } from '@/helpers';
import { Button, Typography } from '@/modules/layout';
import { PlanSelector } from '@/modules/quiz/components/landing/plan-selector';
import { SimpleList } from '@/modules/quiz/components/simple-list';
import CheckIcon from '@/public/icons/check.svg';

import { ComplianceText } from '../../components/landing/compliance-text';
import { Reviews } from '../../components/landing/reviews/review';
import { useQuizPage } from '../../hooks/use-quiz-page';
import styles from './landing.module.css';

const listItems1 = [
  <div className={styles.listOneStyles} key="1">
    <CheckIcon />
    <Typography className={styles.listText}>
      You wake up feeling <br /> motivated and energized
    </Typography>
  </div>,
  <div className={styles.listOneStyles} key="2">
    <CheckIcon />
    <Typography className={styles.listText}>
      You start your day <br /> in harmony with prayer
    </Typography>
  </div>,
  <div className={styles.listOneStyles} key="3">
    <CheckIcon />
    <Typography className={styles.listText}>
      Your relationships <br /> are stronger than ever
    </Typography>
  </div>,
  <div className={styles.listOneStyles} key="4">
    <CheckIcon />
    <Typography className={styles.listText}>
      Yore committed to spiritual <br /> growth and self-improvement
    </Typography>
  </div>,
  <div className={styles.listOneStyles} key="5">
    <CheckIcon />
    <Typography className={styles.listText}>
      You grow closer to God through <br /> everyday Bible reading
    </Typography>
  </div>,
];

const listItems2 = [
  <div className={styles.listTwoStyles} key="1">
    <Typography className={styles.largeText}>71%</Typography>
    <Typography className={`${styles.semiLargeText}`}>
      of users were able to feel the power of prayer after just 6 weeks
    </Typography>
  </div>,
  <div className={styles.listTwoStyles} key="2">
    <Typography className={styles.largeText}>65%</Typography>
    <Typography className={`${styles.semiLargeText}`}>
      of users started to have a meaningful daily routine and peaceful mind
    </Typography>
  </div>,
  <div className={styles.listTwoStyles} key="3">
    <Typography className={styles.largeText}>47%</Typography>
    <Typography className={`${styles.semiLargeText}`}>
      of users struggled with finding time for daily praying
    </Typography>
  </div>,
];

interface LandingProps {
  pageConfig: QuizPage;
}

export const Landing: FC<LandingProps> = ({ pageConfig }) => {
  const { goToNextPage, pageData } = useQuizPage(pageConfig);

  return (
    <>
      <Typography className="mb-16" variant="heading1">
        Choose your plan
      </Typography>
      <PlanSelector
        options={pageData?.planOptions as PlanOption[]}
        className="mb-16"
      />
      <Button onClick={goToNextPage} className="mb-16">
        Get my plan
      </Button>
      <ComplianceText className="mb-48" />
      <Typography className="mb-12" variant="heading1">
        What you get
      </Typography>
      <SimpleList items={listItems1} className="mb-48" />
      <Typography className="mb-16" variant="heading1">
        People just like you achieved great results with App!
      </Typography>
      <SimpleList items={listItems2} className="mb-48" />
      <Reviews reviews={pageData?.reviews as Review[]} className="mb-48" />
      <Typography className="mb-16" variant="heading1">
        Choose your plan
      </Typography>
      <PlanSelector
        options={pageData?.planOptions as PlanOption[]}
        className="mb-16"
      />
      <Button onClick={goToNextPage} className="mb-16">
        Get my plan
      </Button>
      <ComplianceText className="mb-48" />
    </>
  );
};
