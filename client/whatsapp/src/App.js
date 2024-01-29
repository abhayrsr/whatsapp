
import './App.css';
import Messenger from './components/Messenger.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider.jsx';


function App() {
  const clientId = '44903966768-lr1jd13vmbbojpluv98fmofe463q1eqi.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
       <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;

