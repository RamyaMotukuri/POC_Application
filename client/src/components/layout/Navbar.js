//import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import React from 'react';

export default () => {

    return(
        <nav className ="bg-dark text-white mt -5 p-4 text center">
        <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </nav>
    )
}




/*class Navbar extends Component {/
    
    render() {
        return (
            <nav className="navbar navbar expand-sm navbar-dark bg-dark mb-4">
                <div className="container">
                    <Link className ="navbar-brand" to ="/">
                     Learning App
                     </Link>
                     <button className="navbar-toggler" 
                     type = "button" data-toggle = "collapse" 
                     data-target ="#mobile-nav"
                     >
                     <span className="navbar-toggler-icon"/>    
                     </button>
                     <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav ml.auto">
                            <li className="nav-item">
                                <Link className="nav=link" to="/register">
                                    Sign up
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav=link" to="/login">
                                   Login
                                </Link>
                            </li>
                            </ul>  
                     </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
*/

