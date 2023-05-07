import React from 'react'
import Head from 'next/head';
import styled from 'styled-components'
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

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 100px;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;
const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 50px;
`;