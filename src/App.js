import './App.css';
import LoginButton from './components/login-button.component';
import LogoutButton from './components/logout-button.component';
import Profile from './components/profile.component';

import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  
  if(isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <h1>Hello world </h1>
      {
        isAuthenticated ? <LogoutButton /> : <LoginButton />
      }
      <Profile />
    </div>
  );
}

export default App;
