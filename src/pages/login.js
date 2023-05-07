import React from 'react'
import Head from 'next/head';
import { Container, LoginContainer, Logo } from '../styles/loginStyles';
import { Button } from '@mui/material';

function login() {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src="https://www.freepnglogos.com/uploads/whatsapp-logo-png-hd-2.png" />
        <Button variant="outlined">Sign in with Google</Button>
      </LoginContainer>
    </Container>
  )
}

export default login
