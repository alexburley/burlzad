import React from "react";

export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arc: 0,
      hasLoaded: false,
      ticks: 0,
      hasFinished: false,
      globalAlpha: 1.0,
    };
    this.canvas = React.createRef();
    this.dpr = window.devicePixelRatio || 1;
    this.styleWidth = 900;
    this.styleHeight = 450;
    this.canvasWidth = this.styleWidth * this.dpr;
    this.canvasHeight = this.styleHeight * this.dpr;
  }

  componentDidMount() {
    setTimeout(() => setInterval(() => this.tick(), 30), 1500); // After 1.5 seconds trigger a timer to render a frame
    this.ctx = this.canvas.current.getContext("2d");
    this.canvas.current.style.width = `${this.styleWidth}px`;
    this.canvas.current.style.height = `${this.styleHeight}px`;
    this.ctx.scale(this.dpr, this.dpr);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    if (!this.state.hasFinished) {
      if (this.state.arc < 100) {
        this.ctx.clearRect(
          0,
          0,
          this.canvas.current.width,
          this.canvas.current.height
        );
        this.setState({
          arc: this.state.arc + 1,
        });
        this.renderCircle();
        this.renderPercentage();
      } else {
        this.setState({
          hasLoaded: true,
        });
      }
      if (this.state.hasLoaded) {
        if (this.state.ticks < 10) {
          this.setState({
            ticks: this.state.ticks + 1,
          });
        } else {
          this.ctx.clearRect(
            0,
            0,
            this.canvas.current.width,
            this.canvas.current.height
          );
          const alphaToSet =
            this.state.globalAlpha < 0.05 ? 0 : this.state.globalAlpha - 0.05;
          this.setState({
            globalAlpha: alphaToSet,
          });
          this.ctx.globalAlpha = this.state.globalAlpha;
          this.renderCircle();
          this.renderPercentage();
        }
      }
      if (this.state.globalAlpha === 0) {
        this.setState({ hasFinished: true });
        this.props.finished();
      }
    }
  }

  renderPercentage() {
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.font = "30px Lucida Console";
    const alpha = this.state.arc / 100;
    this.ctx.fillStyle = "rgba(255, 255, 255, " + alpha + ")";
    this.ctx.fillText(
      this.state.arc,
      this.styleWidth / 2,
      this.styleHeight / 2
    );
  }
  renderCircle() {
    this.ctx.strokeStyle = "white";
    this.ctx.beginPath();
    this.ctx.arc(
      this.styleWidth / 2,
      this.styleHeight / 2,
      200,
      0,
      this.state.arc * 0.01 * 2 * Math.PI
    );
    this.ctx.stroke();
  }

  render() {
    return (
      <canvas
        ref={this.canvas}
        width={this.canvasWidth}
        height={this.canvasHeight}
      ></canvas>
    );
  }
}
