import Footer from '@/components/common/footer';
import Navbar from '../components/common/navbar';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
