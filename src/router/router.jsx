import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Favorite from '../components/Favorite'
import Admin from '../components/Admin'
import List from '../components/Lists'
import HomeIcon from '@material-ui/icons/Home';
import TheatersIcon from '@material-ui/icons/Theaters';
import {LoginConsumer} from '../context/loginContext'


export const routing=(
  <>
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home"><TheatersIcon/>Movie App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <LoginConsumer>
          {
            (loginInfo)=>{
              if(loginInfo.login)
              {
                return(
                  <>
                  <li className="nav-item">
                    <Link className="nav-to text-decoration-none text-white p-3" to="/List">Lists</Link>
                    </li>
                  <li className="nav-item">
                    <Link className="nav-to text-decoration-none text-white p-3" onClick={()=>{loginInfo.logout(); window.location.pathname="/"}}>Logout</Link>
                  </li>
                  </>
                )
              }
              else{
                return(
                  <>
                  <li className="nav-item">
          <Link className="nav-to active text-decoration-none text-white p-3" aria-current="page" to="/home">Home<HomeIcon style={{fontSize:19}}/></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-to text-decoration-none text-white p-3" to="/favorite">Favorite</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-to text-decoration-none text-white p-3" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-to text-decoration-none text-white p-3" to="/register">Register</Link>
        </li>
                  </>
                )
              }
            }
          }
        </LoginConsumer>
      </ul>
    </div>
  </div>
</nav>
    </div>

    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/favorite" exact component={Favorite}/>
        <Route path="/Admin" exact component={Admin}/>
        <Route path="/List" exact component={List}/>
    </Switch>
    </>

    

    
)
