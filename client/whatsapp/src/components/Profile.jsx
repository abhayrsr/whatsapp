import React from 'react';
import { useContext } from 'react';
import { Typography, Box, styled } from '@mui/material';
import { AccountContext } from '../context/AccountProvider';

const ImageContainer = styled('Box')`
    display: flex;
    justify-content: center;
`
const Image = styled('img')({
    width: 200,
    height: 200,
    borderRadius: '50%',
    padding: '25px 0'
})

const BoxWrapper = styled('Box')`
    background: #FFFFFF;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    & :first-child{
        padding: 12px 30px 2px;
        font-size: 13px;
        color: #009688;
        font-weight: 200;
    }
    & :last-child{
        padding: 0px 30px 2px;
        margin: 14px 0;
        color: #4A4A4A;
    }
`

const DescriptionContainer = styled('Box')`
    padding: 15px 20px 28px 30px;
    & > p {
        padding: 0px 0px 0px 30px;
        font-size: 13px;
        color: #8696a0;
    }
`

export default function Profile() {
    const { account } = useContext(AccountContext);
  return (
    <>
    <ImageContainer>
        <Image src={account.picture} alt='dp'/>
    </ImageContainer>
    <BoxWrapper>
        <Typography>Your Name</Typography>
        <Typography>{account.name}</Typography>
    </BoxWrapper>
    <DescriptionContainer>
       <Typography>---------------------------------------</Typography>
    </DescriptionContainer>
    <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Calls Only !!</Typography>
    </BoxWrapper>
    
    </>
  )
}

