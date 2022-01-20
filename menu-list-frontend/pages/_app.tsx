import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Card from "../components/card";
import { Provider } from "react-redux";
import store from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <><Card /><Provider store={store}>
      <Component {...pageProps} />
    </Provider></>
  )
}

export default MyApp