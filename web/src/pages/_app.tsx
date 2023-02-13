import { globalStyles } from 'styles/global';

import type { AppProps } from 'next/app';
import { UserProvider } from 'contexts/UserContext';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
