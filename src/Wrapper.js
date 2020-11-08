import React from "react";
import Loader from "./Loader.js";
import ProjectBox from "./ProjectBox.js";
import "./Wrapper.css";

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.hasFinished = this.hasFinished.bind(this);
    this.state = {
      loaded: false,
    };
  }

  render() {
    // if (!this.state.loaded) {
    //   return <Loader finished={this.hasFinished} />;
    // } else {
    return (
      <div className="Projects">
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
      </div>
    );
    // }
  }

  hasFinished() {
    this.setState({
      loaded: true,
    });
  }
}
