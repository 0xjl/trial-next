import '../styles/globals.css'
import "swiper/css/bundle";
import '../styles/nprogress.css'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NProgress from 'nprogress';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () =>  NProgress.start());
    router.events.on('routeChangeComplete', () =>  NProgress.done());
    router.events.on('routeChangeError', () =>  NProgress.done());
  }, []);
  return <Component {...pageProps} />
}
