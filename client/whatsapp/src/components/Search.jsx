import React from 'react';
import { Box, InputBase, styled } from '@mui/material';
import { Search as SearchIcon} from "@material-ui/icons";

const Component = styled(Box)`
     background: #fff;
     height: 45px;
     border-bottom: 1px solid #F2F2F2;
     border-radius: 2px;
     display: flex;
     align-items: center;
`
const Wrapper = styled(Box)`
    background-color: #f0f5f2;
    position: relative;
    margin: 0 13px;
    border-radius: 10px;
`
const Icon = styled(Box)`
     position: absolute;
     height: 100%;
     padding: 8px;
     color: #919191;
`
const InputField = styled(InputBase)`
     width: 100%;
     padding: 16px;
     padding-left: 65px;
     font-size: 14px;
     width: 100%;
     height: 15px;
`
export default function Search() {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchIcon 
            fontSize='small'
          />
        </Icon>
        <InputField
           placeholder='Search or start new chat'
        />
      </Wrapper>
    </Component>
  )
}
