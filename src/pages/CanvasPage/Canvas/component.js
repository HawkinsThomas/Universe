import React, { useRef } from 'react';
import { StyledCanvas } from './styledComponents';
import { createRandomFrame } from '../../../helpers/createRandom';
import { clearCanvas, drawCircles } from './utilities';
import { engine } from '../../../engine/index';

const Canvas = () => {
  const canvasRef = useRef(null);
  const numberOfFrames = 1000;
  const numberOfCircles = 2;
  let frameNumber = 0;
  const fristFrame = createRandomFrame(window.innerHeight, window.innerWidth, numberOfCircles);
  const physicsEngine = engine(fristFrame);
  const frames = physicsEngine.generateFrames(numberOfFrames - 1);
  const fps = 60;
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
