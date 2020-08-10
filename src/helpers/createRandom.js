import theme from '../theme';
import { randomProperty } from './randomProperty';


export const createRandomCircle = (maxHeight, maxWidth, color = null) => (
  {
    radius: Math.random() * 5,
    colour: color ? color : randomProperty(theme.colors),
    x: Math.random() * maxWidth,
    y: Math.random() * maxHeight,
  }
);

export const createRandomCircles = (maxHeight, maxWidth, numberOfCircles) => {
  const circles = [];
  for (let i = 0; i < numberOfCircles; i++) {
    circles.push(createRandomCircle(maxHeight, maxWidth));
  };
  return circles;
};

export const createRandomFrames = (maxHeight, maxWidth, numberOfCircles, numberOfFrames) => {
  const frames = [];
  for (let i = 0; i < numberOfFrames; i++) {
    frames.push(createRandomCircles(maxHeight, maxWidth, numberOfCircles));
  };
  return frames;
};
