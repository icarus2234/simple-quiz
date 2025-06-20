'use client';

import '@/styles/reset.css';
import '@/styles/global.css';

import classNames from 'classnames';
import { Inter, Lora, Plus_Jakarta_Sans } from 'next/font/google';

import { Header } from '@/modules/layout/header/header';
import { MainContainer } from '@/modules/layout/main-container';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(
          lora.variable,
          plusJakartaSans.variable,
          inter.variable
        )}
      >
        <Header />
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
