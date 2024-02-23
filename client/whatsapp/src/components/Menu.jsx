import React from 'react';
import Header from './Header';
import { Box } from '@mui/material';
import Search from './Search';

export default function Menu() {
  return (
    <Box>
        <Header/>
        <Search/>
    </Box>
  )
}
