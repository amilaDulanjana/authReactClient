import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class SignOut extends Component {
  componentWillMount() {
    this.props.SignOutUser();
  }

  render() {
    return <div>Sorry to see you goo</div>;
  }
}

export default connect(null, actions)(SignOut);
