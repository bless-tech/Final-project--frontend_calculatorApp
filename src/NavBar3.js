import React from 'react'
import{Link} from 'react-router-dom'
import './NavBar.css'

function Navbar2() {
    return (
        <div>
             <nav>
                <ul>
                {/* <li><Link to='/'>{""}Login</Link></li> */}
                
                 <li className="nav"> EasyCalc</li>
                 <li><Link  to='/'>{""}Login</Link></li> 
                 <li><Link  to='/signup'>{""}Signup</Link></li>
                 {/* <li><Link>{""}Signup</Link></li> 
                   <li><Link >{""}Logout</Link></li>   */}
                      
                </ul>
            </nav>
        </div>
    )
}

export default Navbar2
