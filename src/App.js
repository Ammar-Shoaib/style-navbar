import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { Adb, ReorderOutlined, SearchOutlined, MailOutlineOutlined, SettingsOutlined, InfoOutlined, LiveHelpOutlined } from '@material-ui/icons'

import './App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize:"30px",
    '& .MuiSvgIcon-root': {
      color: "white"
    },
  },
  options: {
    fontSize:"30px",
    position: "absolute",
    left:"85%",
    top:"2.5%",
  },
  search: {
    position: "absolute",
    left: "6px",
    top:'15px'
  }
}))

const App = () => {

  const classes = useStyles()

  const [active, setActive] = useState(true)

  return (
    <div className='app'>
      <div className={active ? 'navbar active' : 'navbar'}>
        <div className={active ? 'header active' : 'header'}>
          <div className="logo" className={active ? 'logo active' : 'logo'}>
            <Adb className={classes.root} />
            <p>Cool Navbar</p>
          </div>
          <span onClick={() => setActive(!active)}><ReorderOutlined style={{ left: active? '85%' : '20%' }} className={classes.options} /></span>
        </div>
        <div className="search-box">
          <span><SearchOutlined className={classes.search} /></span>
          <input type="text" placeholder='Search...'  className={active ? 'search-bar active' : 'search-bar'} />
        </div>
        <div className="list-container">
          <div className="list-item">
            <ul>
              <li>
                <MailOutlineOutlined />
                {active && <a href="#">Messages</a>}
                {!active && <span>Messages</span>}
              </li>
              <li>
                <SettingsOutlined />
                {active && <a href="#">Settings</a>}
                {!active && <span>Settings</span>}
              </li>
              <li>
                <InfoOutlined />
                {active && <a href="#">About Us</a>}
                {!active && <span>About Us</span>}
              </li>
              <li>
                <LiveHelpOutlined />
                {active && <a href="#">Help</a>}
                {!active && <span>Help</span>}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main">
        <h1>Check This Out!</h1>
      </div>
    </div>
  )
}

export default App
