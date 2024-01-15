import * as React from 'react';
import { AppBar, Toolbar, Box, styled } from '@mui/material';
import LoginDialog from '../components/LoginDialog'

const Header = styled(AppBar)`
      height: 220px;
      box-shadow: none;
      background-color: #00a884;
`

export default function Messenger() {
  return (
    <Box>
      <Header>
        <Toolbar>

        </Toolbar>
      </Header>
      <LoginDialog />
    </Box>
  );
}
