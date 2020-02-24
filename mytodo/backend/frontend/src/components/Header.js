import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Register from "./Register";

export class Header extends Component{
    render() {
        return(
                <Router>
                    <header className="header">
                        <div className="header-area">
                        <div className="logo">
                            <h1><a href="#">MyTodo</a></h1>
                        </div>
                        <div className="login">
                            <Link to="/Login">
                                <a >Login in</a>
                            </Link>
                            <Link to="/Register">
                                <a href="">Sign Up</a>
                            </Link>
                        </div>
                    </div>
                        <main>
                            <Route exact path ="/Register" component={Register} />
                        </main>
                    </header>
                </Router>
        );
    }
}



export default Header;
