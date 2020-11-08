function initCanvas() {
  var ctx = document.getElementById("my_canvas").getContext("2d");
  var cW = ctx.canvas.width,
    cH = ctx.canvas.height;
  var time = 0;
  var loop = 0;
  var noOfLoops = 2;
  var timeMax = 400;
  var fTime = 0;

  function Fade() {
    /* takes values from Rect(); for:
     
     fade length
     max Alpha
     fade in (true/false) 
     fade out (true/false) 
     fade in at time 
     fade out at time
     
     */

    this.render = function (fLength, fMaxAlpha, fIn, fOut, fInTime, fOutTime) {
      // no fade in or out
      if (fIn == false && fOut == false) {
        var fAlpha = fMaxAlpha;
        ctx.globalAlpha = fAlpha;
      }
      // no fade in
      if (fIn == false && fOut == true && fTime < fOutTime) {
        var fAlpha = fMaxAlpha;
        ctx.globalAlpha = fAlpha;
      }
      // fade in
      else if (fIn == true && fTime < fInTime) {
        var fAlpha = 0;
        ctx.globalAlpha = fAlpha;
      }
      // fade in
      else if (fTime >= fInTime && fTime <= fLength + fInTime) {
        var fAlpha = (fMaxAlpha * (fTime - fInTime)) / fLength;
        ctx.globalAlpha = fAlpha;
      }

      // fade in stop
      else if (fOut == true && fTime < fOutTime) {
        var fAlpha = fMaxAlpha;
        ctx.globalAlpha = fAlpha;
      }

      // fade out
      else if (
        fOut == true &&
        fTime >= fOutTime &&
        fTime <= fOutTime + fLength
      ) {
        var fAlpha = fMaxAlpha - (fMaxAlpha * (fTime - fOutTime)) / fLength;
        ctx.globalAlpha = fAlpha;
      }

      // fade out stop
      else if (fOut == true && fTime > fOutTime + fLength) {
        var fAlpha = 0;
        ctx.globalAlpha = fAlpha;
      }

      // no fade out
      else if (fOut == false) {
        var fAlpha = fMaxAlpha;
        ctx.globalAlpha = fAlpha;
      }

      // else ?
      else {
        var fAlpha = 0;
        ctx.globalAlpha = fAlpha;
      }
    };
  }

  var fade = new Fade();
  function Rect(rColor) {
    /* takes values for:
     
     x position
     y position
     height
     width
     color
     fade length
     max Alpha
     fade in (true/false) 
     fade out (true/false) 
     fade in at time 
     fade out at time
     
     */

    if (rColor == "random") {
      rColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
    this.render = function (
      rX,
      rY,
      rW,
      rH,
      fLength,
      fMaxAlpha,
      fIn,
      fOut,
      fInTime,
      fOutTime
    ) {
      fade.render(fLength, fMaxAlpha, fIn, fOut, fInTime, fOutTime);
      //fade.render(10,1);

      ctx.fillStyle = rColor;
      ctx.fillRect(rX, rY, rW, rH);
      //console.log('fAlpha ='+fade.fAlpha);
      ctx.globalAlpha = 1;
    };
  }

  function TimeLine() {
    this.render = function () {
      time += 1;
      fTime++;
    };
  }
  var color = "random";
  // var color = 'rgba(255,255,255,1)';
  var timeLine = new TimeLine();
  var rect1 = new Rect(color);
  var rect2 = new Rect(color);
  var rect3 = new Rect(color);
  var rect4 = new Rect(color);
  var rect5 = new Rect(color);
  var rect6 = new Rect(color);
  var rect7 = new Rect(color);
  var rect8 = new Rect(color);
  var rect9 = new Rect(color);

  function animate() {
    ctx.save();
    ctx.clearRect(0, 0, cW, cH);
    timeLine.render();
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, cW, cH);

    // some example rectangles width fade. All fade in and out.

    rect1.render(0, 0, cW / 3, cH / 3, 50, 1, true, true, 125, 300);
    rect2.render(cW / 3, 0, cW / 3, cH / 3, 50, 0.8, true, true, 100, 250);
    rect3.render((cW / 3) * 2, 0, cW / 3, cH / 3, 75, 1, true, true, 25, 175);

    rect4.render(0, cH / 3, cW / 3, cH / 3, 50, 0.5, true, true, 50, 120);
    rect5.render(cW / 3, cH / 3, cW / 3, cH / 3, 175, 1, true, true, 0, 200);
    rect6.render(
      (cW / 3) * 2,
      cH / 3,
      cW / 3,
      cH / 3,
      100,
      0.5,
      true,
      true,
      75,
      250
    );

    rect7.render(0, (cH / 3) * 2, cW / 3, cH / 3, 75, 0.8, true, true, 25, 125);
    rect8.render(
      cW / 3,
      (cH / 3) * 2,
      cW / 3,
      cH / 3,
      50,
      1,
      true,
      true,
      50,
      100
    );
    rect9.render(
      (cW / 3) * 2,
      (cH / 3) * 2,
      cW / 3,
      cH / 3,
      75,
      1,
      true,
      true,
      75,
      325
    );

    if (time >= timeMax) {
      time = 0;
      fTime = 0;
    }
    ctx.restore();
  }
  var animateInterval = setInterval(animate, 15);
}
window.addEventListener("load", function (event) {
  initCanvas();
});
