import React, { Component } from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomeButton from "../custom-button/custom-button.component";
import FormInput from "./../form-input/form-input.component";
import "./sign-in.styles.scss";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  logValue = () => {};
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
          />
          <div className="buttons">
            <CustomeButton type="submit">Sign In</CustomeButton>
            <CustomeButton isGoogleSignIn onClick={signInWithGoogle}>
              {" "}
              Sign in with Google{" "}
            </CustomeButton>
          </div>
        </form>
      </div>
    );
  }
}
