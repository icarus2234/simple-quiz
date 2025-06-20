import classNames from 'classnames';
import { FC } from 'react';

import { Review as ReviewType } from '@/helpers/types';
import { Typography } from '@/modules/layout';
import StarIcon from '@/public/icons/star.svg';

import styles from './review.module.css';

interface ReviewsProps {
  reviews: ReviewType[];
  className?: string;
}

export const Reviews: FC<ReviewsProps> = ({ reviews, className }) => {
  return (
    <div className={classNames(styles.reviewList, className)}>
      {reviews.map((review) => (
        <Review
          key={review.id}
          author={review.author}
          dateTime={review.dateTime}
          reviewText={review.reviewText}
          rating={review.rating}
        />
      ))}
    </div>
  );
};
export const Review: FC<ReviewType> = ({
  author,
  dateTime,
  reviewText,
  rating,
}) => {
  return (
    <div className={styles.reviewBox}>
      <div>
        <div className={styles.reviewTitleBox}>
          <Typography className="plusJakartaSans bold">{author}</Typography>
          <div>{new Array(rating).fill(<StarIcon />)}</div>
        </div>
        <Typography className={styles.dateTime}>{dateTime}</Typography>
      </div>
      <Typography className="textAlignLeft plusJakartaSans">
        {reviewText}
      </Typography>
    </div>
  );
};
