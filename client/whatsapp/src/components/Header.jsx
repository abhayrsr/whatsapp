import React from "react";
import { useContext, useState } from "react";
import { AccountContext } from "../context/AccountProvider";
import { Box, styled } from "@mui/material";
import { Chat as MessageIcon, MoreVert } from "@material-ui/icons";
import InfoDrawer from "./InfoDrawer";

const Component = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: centre;
`;

const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;
    padding: 8px;
    color: #000;
  }

  &: first-child {
    font-size: 22px;
    margin-right: 8px;
    margin-top: 3px;
  }
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
});

export default function Header() {
  const [open , setOpen] = useState(false);

  function toggle(){
    setOpen(true);
  }

  const { account } = useContext(AccountContext);

  return (
    <>
      <Component>
        <Image src={account.picture} alt="dp" onClick = {() => toggle()}/>
        <Wrapper>
          <MessageIcon />
          <MoreVert />
        </Wrapper>
      </Component>
      <InfoDrawer open={open} setOpen={setOpen}/>
    </>
  );
}
