import React from 'react'
import { emptyChatImage } from '../constants/data';
import {Box, Typography, styled} from '@mui/material';

const Component = styled(Box)`
    background: #f8f9fa;
    padding: 30px 100px;
    text-align: center;
    height: 100vh;
    width: 200;
`;

const Container = styled(Box)`
    padding: 0  200px;
`
const Image = styled('img')({
    width: 400,
    marginTop: 100
});

const Title = styled(Typography)`
    font-size: 32px;
    margin: 25px 0 10px 0;
    font-family: inherit;
    font-weigth: 300;
    color: #41525d;
`
const SubTitle = styled(Typography)`
    font-size: 14px;
    color: #667781;
    font-weight: 400;
    font-family: inherit;
`
export default function EmptyChat() {
  return (
    <Component>
    <Container>
        <Image src={emptyChatImage} alt="image"/>
        <Title>WhatsApp Web</Title>
        <SubTitle>Now send and receive messages without keeping your phone online</SubTitle>
        <SubTitle>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</SubTitle>
    </Container>
    </Component>
  )
}
