import React from "react";
import "./ProjectBox.css";

export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBoxContent: true,
    };
  }

  render() {
    if (!this.state.displayBoxContent) {
      return (
        <div className="ProjectBox">
          <div className="ProjectBoxHeader">
            <p>About Me</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="ProjectBox">
          <div className="ProjectBoxHeader">
            <p>About Me</p>
          </div>
          <div className="ProjectBoxContent">
            I am a software developer based in London.
          </div>
        </div>
      );
    }
  }
}
