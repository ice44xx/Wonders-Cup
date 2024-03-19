import '../styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultLayout from '@/layout';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
