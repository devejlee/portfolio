import '@styles/globals.scss';
import { ReactNode } from 'react';

interface AboutLayoutProps {
  children: ReactNode
}

const AboutLayout = ({ children }: AboutLayoutProps) => (
  <div>{children}</div>
);

export default AboutLayout;