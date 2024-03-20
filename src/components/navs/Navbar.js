import { Link } from 'react-router-dom';
import React from 'react';
import { jwtDecode } from 'jwt-decode';

function Navbar()
{
    const logoutHandle = () =>
    {
        localStorage.removeItem('token')
    }

    return (

        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/news">Hírek</Link></li>
                        <li><Link to="/contact">Kapcsolat</Link></li>

                        {/*Public links*/}
                        {
                            (!localStorage.getItem("token")) ?
                                <>

                                </>
                                : null
                        }

                        {/*Admin links*/}
                        {
                            (localStorage.getItem("token") && jwtDecode(localStorage.getItem("token")).role === 'ADMIN') ?
                                <>
                                    <li><Link to="/edituser">Felhasználók</Link></li>

                                </>
                                : null
                        }


                        {/*User roles*/}
                        {
                            (localStorage.getItem("token") && jwtDecode(localStorage.getItem("token")).role === 'USER') ?
                                <>

                                </>
                                : null
                        }

                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                        {
                            (localStorage.getItem("token") &&
                                jwtDecode(localStorage.getItem("token")).role === 'ADMIN') ||
                                (localStorage.getItem("token") &&
                                    jwtDecode(localStorage.getItem("token")).role === 'USER') ?
                                <>
                                    <li>
                                        <a onClick={logoutHandle} href='/'>
                                            <span className="glyphicon glyphicon-log-in"></span> Logout
                                        </a>
                                    </li>
                                </>


                                : ""
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar