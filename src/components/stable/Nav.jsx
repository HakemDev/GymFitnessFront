import React, { Component , Fragment} from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <Fragment>
                    
                <nav className="navbar navbar-expand-lg navbar-light bg-light m-2 ">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <a className="navbar-brand fw-bold" href="#">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                                    className="me-2"
                                    height="20"
                                    alt="MDB Logo"
                                    loading="lazy"
                                />
                                <small >Sud Fitness</small>
                            </a>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item font-weight-bold">
                                    <NavLink activeClassName="nav-link fw-bold" to="">
                                            <span className='nav-link fw-bold'>Workout</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item font-weight-bold">
                                    <NavLink activeClassName="nav-link fw-bold" to="">
                                            <span className='nav-link fw-bold'>Statistique</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item font-weight-bold">
                                    <NavLink activeClassName="nav-link fw-bold" to="/users">
                                            <span className='nav-link fw-bold'>Users Mnagement</span>
                                    </NavLink>
                                    
                                </li>
                            </ul>
                        </div>

                        <div className="d-flex align-items-center">
                            <a className="link-grayish me-3" href="#">
                                <i className="fas fa-shopping-cart"></i>
                            </a>
                            <div className="dropdown">
                                <a
                                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                                href="#"
                                id="navbarDropdownMenuAvatar"
                                role="button"
                                data-mdb-toggle="dropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                >
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                    class="rounded-circle"
                                    height="25"
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"
                                />
                                </a>
                                <ul
                                class="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuAvatar"
                                >
                                <li>
                                    <a class="dropdown-item" href="#">My profile</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Settings</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Logout</a>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
  
            </Fragment>

        );
    }
}

export default Nav;