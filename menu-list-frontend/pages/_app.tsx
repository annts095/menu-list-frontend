import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Card  from "./components/card";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Card />
  )
}

export default MyApp
