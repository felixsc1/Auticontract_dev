import Login from "../components/Login"
import { useMoralis } from "react-moralis"
import { Button } from "@chakra-ui/react"

export default function CustomerPage() {
    const {user, logout} = useMoralis()
    return (
        <>
        {user ? (
        <>Welcome
        <Button margin='10px' onClick={logout}>Sign Out</Button>
        </>
        ) : (
        <Login />
        )
        }
        </>
    )
}
