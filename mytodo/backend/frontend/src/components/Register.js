import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Register extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        password2: ""
    }

    onSubmit = e => {
        e.preventDefault();
        console.log("submit");
    };

    onChange = e =>this.setState({ [e.target.name]: e.target.value });


    render() {
        const { username, email, password, password2 } = this.state;
        return (
       <div>
           <header id="Header"></header>
           <div className="sign">
           <h1>Sign up</h1>
           <form onSubmit={this.onSubmit}>
               <label htmlFor="username">User name</label>
               <input id='username'
                      name="username"
                      type='text'
                      placeholder="User name"
                      onchange={this.onChange}
                      value={username}
               />
                   <label htmlFor="useremail">Email</label>
                   <input id='useremail'
                          name="email"
                          type='text'
                          placeholder="Email"
                          onchange={this.onChange}
                          value={email}
                   />

                   <label htmlFor="pwd">pwd</label>
                   <input id='pwd'
                          name="password"
                          type='password'
                          maxLength='10'
                          placeholder="PW"
                          onchange={this.onChange}
                          value={password}
                   />

                   <label htmlFor="pwd">pwd</label>
                   <input id='pwd'
                          name="password"
                          type='password'
                          maxLength='10'
                          placeholder="PW Confirm"
                          onChange={this.onChange}
                          value={password2}
                   />
                   <div>
                       <button type="submit" className="">
                           Register
                       </button>
                   </div>
               <a href="./login">
                   Already have an account?
               </a>
           </form>
           <footer className="copyright">
               <p>Copyright 2020. bhjh. All right reserved </p>
           </footer>
         </div>
       </div>


    )
    }
}

export default Register;



