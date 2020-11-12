import React, { useEffect, useState, useRef } from "react";

export default function Wrapper({ done }) {
  const [arc, setArc] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [globalAlpha, setGlobalAlpha] = useState(1.0);
  const [intervalId, setIntervalId] = useState();

  const dpr = window.devicePixelRatio || 1;
  const canvas = useRef(null);
  const styleWidth = 900;
  const styleHeight = 450;
  const canvasWidth = styleWidth * dpr;
  const canvasHeight = styleHeight * dpr;

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    canvas.current.style.width = `${styleWidth}px`;
    canvas.current.style.height = `${styleHeight}px`;
    ctx.scale(dpr, dpr);
  }, [dpr]);

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    ctx.globalAlpha = globalAlpha;

    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.arc(styleWidth / 2, styleHeight / 2, 200, 0, arc * 0.01 * 2 * Math.PI);
    ctx.stroke();

    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.font = "30px Lucida Console";
    const alpha = arc / 100;
    ctx.fillStyle = "rgba(255, 255, 255, " + alpha + ")";
    ctx.fillText(Math.floor(arc), styleWidth / 2, styleHeight / 2);
  }, [arc, globalAlpha]);

  useEffect(() => {
    let timer;
    if (arc === 100) {
      clearInterval(intervalId);
      setHasCompleted(true);
      timer = setTimeout(() => {}, 30);
    }
    return () => clearTimeout(timer);
  }, [arc, intervalId]);

  useEffect(() => {
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setArc((arc) => arc + 1 / dpr);
      }, 10);
      setIntervalId(interval);
    }, 1500);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [dpr]);

  useEffect(() => {
    let interval;
    let timer;
    if (hasCompleted) {
      timer = setTimeout(() => {
        interval = setInterval(() => {
          setGlobalAlpha((alpha) => (alpha > 0 ? alpha - 0.05 : 0));
        }, 30);
      }, 500);
    }
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [hasCompleted]);

  useEffect(() => {
    if (globalAlpha === 0) typeof done === "function" && done();
  }, [globalAlpha, done]);

  return (
    <canvas ref={canvas} width={canvasWidth} height={canvasHeight}></canvas>
  );
}
