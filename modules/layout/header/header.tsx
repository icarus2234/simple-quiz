'use client';

import { FC } from 'react';

import { BackArrow } from '@/modules/layout/back-arrow';
import { Menu } from '@/modules/layout/menu';
import LogoIcon from '@/public/icons/logo.svg';

import styles from './header.module.css';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <BackArrow />
        <LogoIcon />
        <Menu />
      </div>
    </header>
  );
};
