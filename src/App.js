import './App.css';
import LoginButton from './components/login-button.component';
import LogoutButton from './components/logout-button.component';
import Profile from './components/profile.component';

function App() {

  return (
    <div className="App">
      <h1>Hello world </h1>
      <LoginButton />
      <Profile />
      <LogoutButton />
    </div>
  );
}

export default App;
