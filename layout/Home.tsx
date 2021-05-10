import { useLayoutEffect } from 'react';
import Head from 'next/head';

interface HomeLayoutProps {
  title?: string;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({
  title = 'Rodrigo Koga',
  children,
}) => {
  return (
    <div className="bg-mountains-light dark:bg-mountains-dark  bg-cover">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex flex-col items-center">{children}</div>
    </div>
  );
};

export default HomeLayout;
