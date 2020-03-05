import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../actions";
import { withRouter } from "react-router";

import "../less/SignInForm.less";

class SignInForm extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  logIn = e => {
    e.preventDefault();
    this.props.logIn(this.state.credentials, this.props.history);
    this.setState({
      credentials: {
        username: "",
        password: ""
      }
    });
  };

  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-page-wrapper">
        <div className="login-form-wrapper">
          {this.props.loggingIn ? (
            <h2>Loading</h2>
          ) : (
            <>
              <form className="login-form" onSubmit={this.logIn}>
                <div className="login-form-header">
                  <div className="login-logo-wrapper"></div>
                  <h3>Log in to</h3>
                  <h2> Secret Cookbook</h2>
                </div>
                <p>Username</p>
                <input
                  type="text"
                  required
                  name="username"
                  onChange={this.handleChanges}
                  value={this.input}
                />
                <p>Password</p>
                <input
                  type="password"
                  required
                  name="password"
                  onChange={this.handleChanges}
                  value={this.input}
                />
                <button className="login-btn" type="submit">
                  Log In
                </button>
                <p className="login-small-font">
                  Not a member? Sign up{" "}
                  <Link className="login-link" to="/sign-up">
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
  loggingIn: state.loggingIn,
  success: state.success
});
export default withRouter(connect(mapStateToProps, { logIn })(SignInForm));
