import React from 'react';
import "./Header.css";
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this, 0);
    }

    handleClick(e, str) {
        if (str === "Login") {
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }));
        }
        console.log(str, "Button clicked");
    }

    render() {
        return (
            <div>
                <header className="bg-dark text-white py-1">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="#" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                                <Icon.CurrencyExchange size={35} />
                            </a>

                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                <li><Link to='/home' className="nav-link px-2 text-secondary">Crypto Tracker</Link></li>
                                <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
                                <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
                                <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
                                <li><a href="#" className="nav-link px-2 text-white">About</a></li>
                            </ul>

                            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                                <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"></input>
                            </form>

                            <div className="text-end">
                                <button type="button" className="btn btn-outline-light me-2" onClick={this.handleClick.bind(this, "Login")}>{this.state.isToggleOn ? 'Login' : 'Logout'}</button>
                                <button type="button" className="btn btn-warning" onClick={this.handleClick.bind(this, "Sign-up")}>Sign-up</button>
                            </div>
                        </div>
                    </div>
                </header>                                
            </div>
        );
    }
}

export default Header;