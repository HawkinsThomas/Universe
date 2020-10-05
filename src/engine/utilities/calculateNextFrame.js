const calculateForce = (object1, object2) => {
  const deltaX = object1.x - object2.x;
  const deltaY = object1.y - object2.y;

  let radians = Math.atan2(deltaY, deltaX);
  radians %= (Math.PI * 2);
  const distance = (Math.sqrt((deltaX ** 2) + (deltaY ** 2)));

  const fx = (-0.001 * object1.mass * object2.mass * Math.cos(radians)) / (distance ** 2);
  const fy = (-0.001 * object1.mass * object2.mass * Math.sin(radians)) / (distance ** 2);
  return { fx, fy };
}

const calculateForces = (objects, currentObject) => {
  objects.forEach((object) => {
    if (object.id === currentObject.id) return;
    currentObject.addForce(calculateForce(currentObject, object))
  });
};

export const calculateNextFrame = (objects) => {
  objects.forEach(object => object.resetForces());
  objects.forEach(object => calculateForces(objects, object));
  objects.forEach(object => object.updatePosition(1));

  const nextFrame = objects.map((object) => {
    const { radius, x, y } = object;

    return { radius, colour: "yellow", x, y }
  });

  return { objects, nextFrame };
};
