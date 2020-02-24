import React, {Component, Fragment} from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

export class Banner extends Component{
    render() {
        return(
            <Fragment>
                <div className="banner">
                    <div className="banner-area">
                        <div className="time js-time">
                            <h2>00:00</h2>
                            <p>2020년 3월 10일 화요일</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    };
};



export default Banner;
