import { useMoralis } from "react-moralis";
import { useState } from "react";
import { Container, Input, Button, Text, Flex, Spacer, Alert, AlertIcon } from "@chakra-ui/react";

export default function Login() {
    const { signup, login } = useMoralis();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showAlert, setShowAlert] = useState(false)

    function handleSignUp() {
        signup(email, password)
        setShowAlert(true)
    }


    return (
        <>
      <Container pt={20}>
        <Text textAlign={'left'}>Please log in or register with your email address</Text>
        <Input mt={5} placeholder="Email" value={email} onChange={event => setEmail(event.currentTarget.value)} />
        <Input mt={5} placeholder="Password" type="password" value={password} onChange={event => setPassword(event.currentTarget.value)} />
        <Flex mt={5}>
            <Button  id="signup" onClick={handleSignUp}>Sign up</Button>
            <Spacer />
            <Button px={7} bg='blue.300' id="login" onClick={() => login(email, password)}>Login</Button>
        </Flex>
        
      </Container>
      { showAlert &&
        <Alert status='success' textAlign='center' alignItems='center'  mt={10} flexDirection='column'>
            <AlertIcon />
            Successfully registered a new account
        </Alert>
        }
        </>
    )
  }