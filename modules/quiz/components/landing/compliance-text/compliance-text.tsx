import classNames from 'classnames';
import { FC } from 'react';

import { Typography } from '@/modules/layout';

import styles from './compliance-text.module.css';

interface ComplianceTextProps {
  className?: string;
}

export const ComplianceText: FC<ComplianceTextProps> = ({ className }) => {
  return (
    <Typography className={classNames(styles.mainText, className)}>
      You are enrolling in a 3-monthly subscription to{' '}
      <a href="https://awesomeapp.com/subscription" className={styles.link}>
        https://awesomeapp.com/subscription
      </a>{' '}
      with the discount price $29.99.You agree that the plan you selected will
      automatically be extended at the full price for successive renewal periods
      and you will be charged $99.99 every 3 months until you cancel the
      subscription. Payments will be charged from the card you specified here.
      You can cancel your subscription by contacting our customer support team
      via email at support@awesomeapp.com Subscription Policy. The charge will
      appear on your bill as &quot;awesomeapp&quot;
    </Typography>
  );
};
