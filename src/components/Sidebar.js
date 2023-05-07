import React from 'react'
import { Avatar, IconButton } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon  from '@mui/icons-material/Search';
import styled from 'styled-components'

const Sidebar = () => {
  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconContainer>
      </Header>
      <Search>
        <SearchIcon />
        <SearchInput placeholder='Search in chats' />
      </Search>
    </Container>
  )
}

export default Sidebar

const Container = styled.div``;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2px;
  padding: 20px;
`;
const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const IconContainer = styled.div``;
