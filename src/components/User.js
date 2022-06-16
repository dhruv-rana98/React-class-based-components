import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  componentWillUnmount() {
    console.log("User will unmount");
  }

  componentDidMount() {
    console.log("User Mounted");
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
// const User = (props) => {};

export default User;
