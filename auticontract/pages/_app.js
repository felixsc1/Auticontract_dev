import Header from "../components/Header"
import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>AuticContract</title>
                <meta name="description" content="Auticontract web app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoralisProvider initializeOnMount={false}>
                <Header />
                <Component {...pageProps} />
            </MoralisProvider>
        </div>
    )
}

export default MyApp
