import 'styles/index.css';
import type { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
  );
}
