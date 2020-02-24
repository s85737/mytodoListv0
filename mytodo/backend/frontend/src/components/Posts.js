import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { getPosts } from "../actions/posts";

export class Posts extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired
    };
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return (
            <Fragment>
                <h2>Leads</h2>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th />
                    </tr>
                    </thead>
                    <tbody>
                    { this.props.posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.priority}</td>
                            <td>{post.author}</td>
                            <td>{post.content}</td>
                            <td>
                                <button>
                                    Delete </button>
                            </td>
                        </tr>
                    )) }
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts
});

export default connect(mapStateToProps, { getPosts})(Posts);