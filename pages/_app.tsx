import '../styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultLayout from '@/layout';
import type { AppProps } from 'next/app';
import Widget from '@/components/common/widget';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Widget />
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
