import React, {Component, Fragment} from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

export class BottomNav extends Component{
    render() {
        return(
            <Fragment>
                <footer className="nav" id="nav">
                    <div className="nav-area">
                        <div className="nav-area-plus">
                            <button type="button" onClick="openPopUp()">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 6.85714H9.14286V0H6.85714V6.85714H0V9.14286H6.85714V16H9.14286V9.14286H16V6.85714Z"
                                          fill="#D20BBE"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </footer>
            </Fragment>
        );
    };
};



export default BottomNav;


