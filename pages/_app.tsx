import '../styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultLayout from '@/layout';
import type { AppProps } from 'next/app';
import Widget from '@/components/common/widget';
import CustomLoadingBar from '@/components/common/loading';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <CustomLoadingBar />
      <Widget />
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
