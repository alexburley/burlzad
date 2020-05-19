import React from "react";
import Loader from "./Loader.js";

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.hasFinished = this.hasFinished.bind(this);
    this.state = {
      loaded: false,
    };
  }

  render() {
    if (!this.state.loaded) {
      return <Loader finished={this.hasFinished} />;
    } else {
      return (
        <header className="App-header">
          <h1>Burlzad</h1>
        </header>
      );
    }
  }
  hasFinished() {
    this.setState({
      loaded: true,
    });
  }
}
