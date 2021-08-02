import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import About from './about'
import Home from './homepage'
import Profile from './profile'
import Users from './users'
import './stylesheet.css'
const Menu = () => {
  return (
    <Router>
      <div>
        <nav className='menu'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  )
}
export default Menu
