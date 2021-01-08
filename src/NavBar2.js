import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
          <div>
              <AppBar position="static">
                  <Toolbar>
                      <Typography variant="body1" colour="dark">
                          <ul>
                            <li><Link className="lay p-2" to='/'>Login</Link></li>
                            <li><Link className="lay p-2" to='/signup'>Signup</Link></li>
                            </ul>
                      </Typography>
                  </Toolbar>
              </AppBar>
          </div>
    )
}
export default NavBar;