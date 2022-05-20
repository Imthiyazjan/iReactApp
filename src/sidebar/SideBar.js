import React from "react";
import "./SideBar.css";
import * as Icon from 'react-bootstrap-icons';
import Page from "../components/Page";
import { NavLink } from "react-router-dom";

class SideBar extends React.Component {
    render() {
        return (   
            <main>
                <div className="col-md-2 d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" >
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">                            
                            <NavLink to="/home" className={({isActive}) => (isActive ? "nav-link text-white active" : 'nav-link text-white')} >
                                <Icon.HouseFill />
                                <span>Home</span>
                            </NavLink>                                             
                        </li>
                        <li>
                            <NavLink to="/dashboard" className={({isActive}) => (isActive ? "nav-link text-white active" : 'nav-link text-white')} >
                                <Icon.Speedometer />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/orders" className={({isActive}) => (isActive ? "nav-link text-white active" : 'nav-link text-white')}>
                                <Icon.Table />
                                <span>Orders</span>
                            </NavLink>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <Icon.Grid />
                                <span>Products</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <Icon.PersonCircle />
                                <span>Customers</span>
                            </a>
                        </li>
                    </ul>
                    <hr></hr>
                    <div className="dropdown">
                        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"></img>
                            <strong>mdo</strong>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr className="dropdown-divider"></hr></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
                <Page/>
            </main>
        );
    }
}

export default SideBar;