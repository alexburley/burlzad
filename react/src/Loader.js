import React from "react";

export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arc: 0 };
    this.canvas = React.createRef();
    this.canvasWidth = 450;
    this.canvasHeight = 225;
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 30);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  setupCanvas(canvas) {
    const dpr = window.devicePixelRatio || 1;
    const rect = this.canvas.current.getBoundingClientRect();
    this.setState({
      canvasWidth: rect.width * dpr,
      canvasHeight: rect.height * dpr,
    });
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    return ctx;
  }

  tick() {
    if (this.state.arc < 100) {
      this.setState({
        arc: this.state.arc + 1,
      });
      //   const dpr = window.devicePixelRatio || 1;
      const ctx = this.canvas.current.getContext("2d");
      ctx.strokeStyle = "white";
      ctx.beginPath();
      ctx.arc(225, 150, 75, 0, this.state.arc * 0.01 * 2 * Math.PI);
      ctx.stroke();
    }
  }

  render() {
    return (
      <div>
        <canvas
          ref={this.canvas}
          width={this.canvasWidth}
          height={this.canvasHeight}
        ></canvas>
      </div>
    );
  }
}
