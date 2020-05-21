import React from "react";
import "./ProjectBox.css";

export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBoxContent: true,
    };
    this.toggleContent = this.toggleContent.bind(this);
    this.displayContent = this.displayContent.bind(this);
    this.displayHeader = this.displayHeader.bind(this);
  }

  toggleContent() {
    this.setState({
      displayBoxContent: !this.state.displayBoxContent,
    });
  }

  displayHeader() {
    const headerClass = "ProjectBoxHeader";
    return (
      <div
        className={
          this.state.displayBoxContent
            ? headerClass
            : `${headerClass} showBottom`
        }
      >
        <button onClick={this.toggleContent}>
          <p>About Me</p>
        </button>
      </div>
    );
  }

  displayContent() {
    return (
      <div
        className={
          this.state.displayBoxContent
            ? "ProjectBoxContent"
            : "ProjectBoxContent hidden"
        }
      >
        Lorem ipsum something something
      </div>
    );
  }

  render() {
    return (
      <div className="ProjectBox">
        {this.displayHeader()}
        {this.displayContent()}
      </div>
    );
  }
}
