import LoadingBar from 'react-top-loading-bar';
import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

const CustomLoadingBar = () => {
  const loadingBarRef = useRef<any>(null);
  const router = useRouter();

  useEffect(() => {
    const startLoading = () => {
      loadingBarRef.current.continuousStart();
    };

    const completeLoading = () => {
      loadingBarRef.current.complete();
    };

    startLoading();

    const handleRouteChange = () => {
      startLoading();
    };

    const handleRouteComplete = () => {
      completeLoading();
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteComplete);

    if (router.isReady) {
      completeLoading();
    }

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteComplete);
    };
  }, [router.events, router.isReady]);

  return <LoadingBar color="#e64e74" height={4} ref={loadingBarRef} />;
};

export default CustomLoadingBar;
