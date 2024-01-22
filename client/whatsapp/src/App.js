
import './App.css';
import Messenger from './components/Messenger.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const clientId = '44903966768-lr1jd13vmbbojpluv98fmofe463q1eqi.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;

