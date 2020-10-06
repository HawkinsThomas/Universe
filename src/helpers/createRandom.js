import theme from '../theme';
import { randomProperty } from './randomProperty';


export const createRandomCircle = (maxHeight, maxWidth, color = null, vx = 0, vy = 0) => (
  {
    colour: color ? color : randomProperty(theme.colors),
    vx: vx,
    vy: vy,
    x: Math.random() * maxWidth,
    y: Math.random() * maxHeight,
    mass: 200,
  }
);

export const createRandomDiscCircle = (discDims) => {
  const { x: centerX, y: centerY, r: maxR } = discDims
  const radians = Math.random() * Math.PI * 2;
  const radius = maxR * Math.random();
  return {
    colour: randomProperty(theme.colors),
    vx: (radius / 4) * Math.cos(radians + Math.PI / 2) / ((radius ** 0.7) + 10),
    vy: (radius / 4) * Math.sin(radians + Math.PI / 2) / ((radius ** 0.7) + 10),
    x: centerX + (radius * Math.cos(radians)),
    y: centerY + (radius * Math.sin(radians)),
    mass: 2000,
  }
};

export const createRandomFrame = (maxHeight, maxWidth, numberOfCircles) => {
  const circles = [];
  for (let i = 0; i < numberOfCircles; i++) {
    circles.push(createRandomCircle(maxHeight, maxWidth));
  };
  return circles;
};

export const createDiscFrame = (maxHeight, maxWidth, numberOfCircles) => {
  const discDims = {
    x: (maxWidth / 2),
    y: (maxHeight / 2),
    r: Math.min(maxHeight, maxWidth) / 2,
  }
  const circles = [];
  for (let i = 0; i < numberOfCircles; i++) {
    circles.push(createRandomDiscCircle(discDims));
  };
  return circles;
};

export const createRandomFrames = (maxHeight, maxWidth, numberOfCircles, numberOfFrames) => {
  const frames = [];
  for (let i = 0; i < numberOfFrames; i++) {
    frames.push(createRandomFrame(maxHeight, maxWidth, numberOfCircles));
  };
  return frames;
};
