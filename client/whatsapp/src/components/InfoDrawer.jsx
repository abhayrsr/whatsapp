import React from 'react';
import { Drawer, Box, Typography, styled } from '@mui/material';
import { ArrowBack }from "@material-ui/icons";
import Profile from './Profile';

const Header = styled('Box')`
    background: #008069;
    height: 107px;
    color: #FFFFFF;
    display: flex;
    & > svg, & > p {
        margin-top: auto;
        padding: 15px;
        font-weight: 600;
    }
`;

const Component = styled(Box)`
    background: #ededed;
    height: 85%;
`

const drawerStyle = {
    left: 20,
    top: 17,
    height: '95%',
    width: '30%',
    boxShadow:  'none'
}

export default function InfoDrawer({open, setOpen}) {
    function handleClose(){
        setOpen(false);
    }

  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{sx: drawerStyle}}
      style={{ zIndex: 1500}}
    > 
    <Header>
        <ArrowBack onClick = { ()=> handleClose() }/>
        <Typography>Profile</Typography>
    </Header>

    <Component>
        <Profile/>
    </Component>
    </Drawer>
        
  )
}
