import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import * as EmailValidator from 'email-validator';
import {
  Container,
  Header,
  IconContainer, Search, SearchInput,
  UserAvatar,
  SidebarButton
} from '../styles/sidebarStyles';

const Sidebar = () => {
  const createChat = () => {
    const input = prompt('Please enter an email address for the user your wish to chat with!');
    if (!input) return;

    if (EmailValidator.validate(input)) {
      // we need to add the chat into DB 'chat' collection
    }
  }

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
      <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>
    </Container>
  )
}

export default Sidebar
