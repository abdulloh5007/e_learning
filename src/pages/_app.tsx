import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from '@/components/Context/Context'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Provider>
      <Component {...pageProps} />
    </Provider>
  </>
}
