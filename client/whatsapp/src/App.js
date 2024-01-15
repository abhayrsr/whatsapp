
import './App.css';
import Messenger from './components/Messenger.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const clientId = '';
  return (
    <GoogleOAuthProvider clientId=" ">
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
