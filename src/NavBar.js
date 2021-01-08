import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import {Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavBar.css'


function NavBar() {


    return (
        <div>
            <Navbar bg="dark"  expand="lg">
                <Nav className="mr-auto">
                    <Link className="lay p-2" to='/'>Login</Link>
                    <Link className="lay p-2" to='/signup'>Signup</Link>
                    <Link className="lay p-2" to='/main'>Main</Link>
                        {/* <div className="align3">
                        {
                        LoggedIn?
                        <>
                
                        <Link className="lay p-2" to='/Logout'>Logout
                        <button onClick={handleLogout}>Logout</button></Link>
              
                        </>
                        :( 
                        <>
                        {""}
                    </>) }
                        
                        </div> */}
                </Nav>
            </Navbar>
  
  </div>
  
    )
}

export default NavBar
