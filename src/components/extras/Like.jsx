import React, { Component } from "react";

class Like extends Component {
  render() {
    return (
      <i
        onClick={this.props.onClicked}
        className={this.changeClass()}
        style={{ cursor: "pointer" }}
      />
    );
  }
  changeClass() {
    let iconName = "fa-heart";
    return this.props.liked === true ? "fas " + iconName : "far " + iconName;
  }
}

export default Like;
