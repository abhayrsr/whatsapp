import React from 'react';
import { AppBar, Dialog, Box, styled } from "@mui/material";
import EmptyChat from './EmptyChat';
import Menu from './Menu';

const Component = styled(Box)`
  display: flex;
`

const LeftComponent = styled(Box)`
  min-width: 450px;
`

const RightComponent = styled(Box)`
  width: 73%,
  min-width: 300px,
  height: 100%,
  border-left: 1px solid rgba(0, 0, 0, 0.14)
`

const displayDialog = {
  height: "95%",
  margin: '20px',
  borderRadius: '0px',
  width: "100%",
  maxWidth: "100%",
  maxHeight: "100%"
};

const Header = styled(AppBar)`
  height: 220px;
  box-shadow: none;
  background-color: #00a884;
`;

export default function ChatDialog() {
  return (
    <Box>
      <Header></Header>
      <Dialog open={true} PaperProps={{ sx: displayDialog }} hideBackdrop={{ sx: { display: 'none' } }}>
        <Component>
          <LeftComponent>
            <Menu/>
          </LeftComponent>
          <RightComponent>
            <EmptyChat/>
          </RightComponent>
        </Component>
      </Dialog>
    </Box>
  )
}
