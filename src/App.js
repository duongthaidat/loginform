
import './App.css';
import React, {useContext} from 'react';
import Dashboard from './Dashboard';
import LoginForm from './Login';
import { AuthContext } from './context/Auth.context';

function App() {
  const {state} = useContext(AuthContext)
 
  if(!state.isLoggedIn)
    return <LoginForm />
    else
    return <Dashboard />
}

export default App;
