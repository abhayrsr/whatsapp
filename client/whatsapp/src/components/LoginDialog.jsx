import { Dialog, List, Box, ListItem, Typography, styled } from "@mui/material";
import { qrCodeImage } from "../constants/data";
import { GoogleLogin } from "@react-oauth/google";

const Component = styled(Box)`
  display: flex;
  margin: 2%;
`;

const ComponentStyle = styled(Box)`
  place-item: centre;
  margin: 2%;
`;
const Qrcode = styled("img")`
  padding: 20px 0px 20px 0px;
`;
const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
`;
const displayDialog = {
  height: "95%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
};

function LoginDialog() {
  return (
    <Dialog open={true} PaperProps={{ sx: displayDialog }}>
      <Component>
        <ComponentStyle>
          <Title>Use WhatsApp on your computer</Title>
          <List>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>
              2. Tap Menu or Settings and click Linked devices
            </ListItem>
            <ListItem>3. Tap on Link a device</ListItem>
            <ListItem>
              4. Point your phone to this screen to capture the QR code
            </ListItem>
          </List>
        </ComponentStyle>
        <Box>
          <Qrcode src={qrCodeImage} alt="qr code" />
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          ;
        </Box>
      </Component>
    </Dialog>
  );
}

export default LoginDialog;
