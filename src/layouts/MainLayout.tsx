import { ReactNode } from 'react';
import { MainLayoutStyleWrapper } from './MainLayoutStyleWrapper';

interface IMainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: IMainLayoutProps) {
  return (
    <MainLayoutStyleWrapper>
      <header />
      <div className="content">
        {children}
      </div>
      <footer />
    </MainLayoutStyleWrapper>
  );
}
