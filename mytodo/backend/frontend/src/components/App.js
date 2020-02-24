import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Register from "./Register";
import Banner from "./Banner";
import BottomNav from "./BottomNav";

import { Provider } from 'react-redux';
import store from '../store';
import Dashboard from "./Dashboard";


class App extends Component{
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header/>
                    <div>
                        <Banner/>
                        <Dashboard/>
                    </div>
                    <BottomNav/>
                </Fragment>
            </Provider>
        );
    };
};

ReactDOM.render(<App />, document.getElementById('app'));