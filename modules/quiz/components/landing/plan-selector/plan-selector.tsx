import classNames from 'classnames';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { PlanOption } from '@/helpers';
import PlanRadioButton from '@/modules/quiz/components/landing/plan-radio-button/plan-radio-button';

import styles from './plan-selector.module.css';

type FormValues = {
  plan: string;
};

interface PlanSelectorProps {
  options: PlanOption[];
  className?: string;
}

export const PlanSelector: FC<PlanSelectorProps> = ({ options, className }) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: { plan: 'planId2' },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Selected Plan:', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames(styles.form, className)}
    >
      <PlanRadioButton control={control} name="plan" options={options} />
    </form>
  );
};
