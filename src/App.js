import './App.css';
import { routing } from './router/router';
import {BrowserRouter} from 'react-router-dom'
import {LoginProvider} from './context/loginContext'
import {useState} from 'react'

function App() {
const [login, setLogin] = useState(false)
const logout=()=>{
  setLogin(false);
}
const changeLogin = ()=>{
  setLogin(true);
}
const loginInfo={
  login:login,
  logout:logout,
  changeLogin:changeLogin

}

  return (
    <>
    <BrowserRouter>
    <LoginProvider value={loginInfo}>
    {routing}
    </LoginProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
