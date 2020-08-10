import React, { useRef } from 'react';
import { StyledCanvas } from './styledComponents';
import { createRandomFrames } from '../../../helpers/createRandom';
import { clearCanvas, drawCircles } from './utilities';

const Canvas = () => {

  const canvasRef = useRef(null);
  const numberOfFrames = 50;
  const numberOfCircles = 1000;
  let frameNumber = 0;
  const frames = createRandomFrames(window.innerHeight, window.innerWidth, numberOfCircles, numberOfFrames);
  const fps = 20;
  const fpsInterval = 1000 / fps;
  let prevTime;

  const startAnimation = () => {
    prevTime = window.performance.now();
    animate();
  }

  const animate = (newtime) => {
    requestAnimationFrame(animate);

    let now = newtime;
    let timeElapsed = now - prevTime;

    if (timeElapsed > fpsInterval) {
      prevTime = now - (timeElapsed % fpsInterval)

      clearCanvas(canvasRef);
      drawCircles(canvasRef, frames[frameNumber]);
      frameNumber += 1;
      frameNumber %= numberOfFrames;
    }
  }

  return(
    <StyledCanvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      onClick={() => startAnimation()}
    />
  );
}

export { Canvas };
