import classNames from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './simple-list.module.css';

interface SimpleTableProps {
  items: ReactNode[];
  className?: string;
}

export const SimpleList: FC<SimpleTableProps> = ({ items, className }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <ul className={classNames(styles.simpleListContainer, className)}>
      {items.map((item, index) => (
        <li key={index} className={styles.simpleListItem}>
          {item}
        </li>
      ))}
    </ul>
  );
};
