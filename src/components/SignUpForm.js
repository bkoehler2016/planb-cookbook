import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../actions";
import logo from "../assets/secret-cookbook-logo.png";
import "../less/SignUpForm.less";

class SignUpForm extends React.Component {
  state = {
    username: "",
    password1: "",
    password2: "",
    passwordMatch: true
  };

  handleChanges = e => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  signUp = e => {
    e.preventDefault();
    if (this.state.password1 === this.state.password2) {
      const newUser = {
        username: this.state.username,
        password: this.state.password1
      };
      this.props.signUp(newUser, this.props.history);
      this.setState({
        username: "",
        password1: "",
        password2: ""
      });
    } else {
      this.setState({ ...this.state, passwordMatch: false });
    }
  };

  render() {
    return (
      <div className="signup-page-wrapper">
        <div className="signup-form-wrapper">
          {this.props.signingUp ? (
            <h2>Loading</h2>
          ) : (
            <>
              <form className="signup-form" onSubmit={this.signUp}>
                <div className="signup-form-header">
                  <div className="signup-logo-wrapper">
                    <img src={logo} alt="logo" className="signup-logo" />
                  </div>
                  <h3>Welcome to</h3>
                  <h2>Secret Cookbook</h2>
                </div>
                <p>Username</p>
                <input
                  type="text"
                  required
                  name="username"
                  onChange={this.handleChanges}
                  value={this.input}
                />
                <p>Create password</p>
                <input
                  type="password"
                  required
                  name="password1"
                  onChange={this.handleChanges}
                  value={this.input}
                />
                <p>Confirm password</p>
                <input
                  type="password"
                  required
                  name="password2"
                  onChange={this.handleChanges}
                  value={this.input}
                />
                {!this.state.passwordMatch ? (
                  <p>Oops! Your passwords don't match</p>
                ) : (
                  ""
                )}
                <br />
                <button className="signup-btn" type="submit">
                  Sign Up
                </button>
                <p className="signup-small-font">
                  Already a member? Sign in{" "}
                  <Link to="/log-in" className="signup-link">
                    here
                  </Link>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  signingUp: state.signingUp
});
export default withRouter(connect(mapStateToProps, { signUp })(SignUpForm));
