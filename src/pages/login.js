import { Button } from '@mui/material';
import Head from 'next/head';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { Container, LoginContainer, Logo } from '../styles/loginStyles';

function login() {

  const signIn = () => {
    signInWithPopup(auth, provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src="https://www.freepnglogos.com/uploads/whatsapp-logo-png-hd-2.png" />
        <Button
          onClick={signIn}
          variant="outlined"
        >
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  )
}

export default login
