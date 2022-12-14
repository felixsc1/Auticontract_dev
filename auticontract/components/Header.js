import Link from "next/link"
//import { ConnectButton } from "@web3uikit/web3"
import { useMoralis } from "react-moralis"
import { Button } from "@chakra-ui/react"

export default function Header() {

    const {authenticate, authError} = useMoralis()

    return (
        <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
            <h1 className="py-4 px-4 font-bold text-3xl">AutiContract</h1>
            <div className="flex flex-row items-center">
                <Link href="#">
                    <a className="mr-4 p-6">Customer</a>
                </Link>
                <Link href="#">
                    <a className="mr-4 p-6">Lawyer</a>
                </Link>
                <Link href="#">
                    <a className="mr-4 p-6">Contact</a>
                </Link>
            </div>
            <Button onClick={authenticate}>Connect Wallet</Button>
        </nav>
    )
}
