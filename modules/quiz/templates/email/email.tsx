'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { QuizPage } from '@/helpers';
import { Button, Typography } from '@/modules/layout';
import Input from '@/modules/layout/input/input';

import { useQuizPage } from '../../hooks/use-quiz-page';
import styles from './email.module.css';

const emailSchema = z.object({
  email: z
    .string()
    .nonempty('Email is required')
    .regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address'),
});

interface EmailProps {
  pageConfig: QuizPage;
}

export const Email: FC<EmailProps> = ({ pageConfig }) => {
  const { goToNextPage, setResults } = useQuizPage(pageConfig);

  const { control, handleSubmit } = useForm<{ email: string }>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = (data: { email: string }) => {
    goToNextPage();
    setResults({ email: data.email });
    console.log('Form submitted:', data);
  };

  return (
    <>
      <Typography className="mb-32" variant="heading1">
        Enter your email to get <br /> your personalised <br /> Spiritual Growth
        Plan
      </Typography>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          control={control}
          placeholder="Enter your email"
          type="text"
          label="Email"
        />
        <Button type="submit">Continue</Button>
      </form>
    </>
  );
};
