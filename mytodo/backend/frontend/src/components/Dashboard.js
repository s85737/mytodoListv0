import React, {Component, Fragment} from 'react';
import TodoList from './TodoList';
import posts from "../reducers/posts";
class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <div>Todo Create Form</div>
                <TodoList />
            </Fragment>

        );
    }
}

export default Dashboard;