import Header from "../components/Header"
import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import { ChakraProvider } from '@chakra-ui/react'
import Head from "next/head"

function MyApp({ Component, pageProps }) {

    const appId="3gKNuuVcz6N28jYPdNviLbaB6vHqr9qEfBSlNKge"
    const serverUrl="https://qzcpv279bqi3.usemoralis.com:2053/server"

    return (
        <div>
            <Head>
                <title>AuticContract</title>
                <meta name="description" content="Auticontract web app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ChakraProvider>
            <MoralisProvider appId={appId} serverUrl={serverUrl}>
                <Header />
                <Component {...pageProps} />
            </MoralisProvider>
            </ChakraProvider>
        </div>
    )
}

export default MyApp
