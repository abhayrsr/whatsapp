import * as React from "react";
import { AppBar, Toolbar, Box, styled } from "@mui/material";
import LoginDialog from "../components/LoginDialog";
import ChatDialog from "../components/ChatDialog.jsx";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider.jsx";

const Header = styled(AppBar)`
  height: 220px;
  box-shadow: none;
  background-color: #00a884;
`;

export default function Messenger() {
  const { account } = useContext(AccountContext);
  return (
    <Box>
      {account ? (
        <ChatDialog />
      ) : (
        <div>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <LoginDialog />
        </div>
      )}
    </Box>
  );
}
