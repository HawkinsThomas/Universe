import { calculateNextFrame } from './utilities';
import { createObject } from './Object';

export const engine = (startingFrame) => ({
  gravityConstant: 100,
  frames: [startingFrame],
  objects: [],
  objectsFromStartingFrame() {
    startingFrame.forEach((circle, index) => {
      const {mass, colour, x, y, vx, vy} = circle;

      this.objects.push(createObject(index, x, y, mass, vx, vy, colour));
    });
  },
  generateFrames(numberOfFrames) {
    this.objectsFromStartingFrame();
    for (let i = 0; i < numberOfFrames; i++) {
      const { objects, nextFrame } = calculateNextFrame(this.objects);
      this.objects = objects;
      this.frames.push(nextFrame);
    };

    return this.frames;
  },
});
