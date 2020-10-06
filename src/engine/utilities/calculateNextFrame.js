const calculateDistance = (object1, object2) => {
  const deltaX = object1.x - object2.x;
  const deltaY = object1.y - object2.y;

  const distance = (Math.sqrt((deltaX ** 2) + (deltaY ** 2)));

  if (distance < object1.radius + object2.radius) {
    object1.collisionDetected.push(object2.id);
    object2.collisionDetected.push(object1.id);
  }

  return { distance: distance + 5, deltaX, deltaY };
};

const calculateDistances = (objects, currentObject) => {
  objects.forEach((object) => {
    if (object.id === currentObject.id) return;
    currentObject.distanceFromOtherObjects[object.id] = calculateDistance(currentObject, object)
  });
}

const updateDistances = (objects) => {
  objects.forEach((object) => {
    object.distanceFromOtherObjects = {};
    object.collisionDetected = [];
  });
  objects.forEach(object => calculateDistances(objects, object));
}

const calculateForce = (object1, object2) => {

  const { distance, deltaX, deltaY } = object1.distanceFromOtherObjects[object2.id]
  let radians = Math.atan2(deltaY, deltaX);
  radians %= (Math.PI * 2);

  const fx = (-0.001 * object1.mass * object2.mass * Math.cos(radians)) / (distance ** 2);
  const fy = (-0.001 * object1.mass * object2.mass * Math.sin(radians)) / (distance ** 2);
  return { fx, fy };
};

const calculateForces = (objects, currentObject) => {
  objects.forEach((object) => {
    if (object.id === currentObject.id) return;
    currentObject.addForce(calculateForce(currentObject, object))
  });
};

const resolveCollisions = (objects) => {
  let objectsAfterCollision = objects;
  for (const object of objects) {
    if (object.collisionDetected.length) {
      const collider = objects.find(obj => obj.id === object.collisionDetected[0])
      const collision = {};
      if (object.mass < collider.mass) {
        collision.smallerObject = object;
        collision.biggerObject = collider;
      } else {
        collision.biggerObject = object;
        collision.smallerObject = collider;
      }

      objectsAfterCollision = objectsAfterCollision.filter(obj => obj.id !== collision.smallerObject.id);

      for (let obj of objectsAfterCollision) {
        if (obj.id === collision.biggerObject.id) {
          obj.mass = collision.biggerObject.mass + collision.smallerObject.mass;
          const conservationFactor = 0.99;
          const { mass, vx, vy } = object
          const { mass: cMass, vx: cvx, vy: cvy } = collider;
          obj.vx =  conservationFactor * ((mass * vx) + (cMass * cvx)) / (mass + cMass);
          obj.vy = conservationFactor * ((mass * vy) + (cMass * cvy)) / (mass + cMass);
          updateDistances(objectsAfterCollision);
          break;
        }
      };
    }
  };
  return objectsAfterCollision;
}

export const calculateNextFrame = (objects) => {
  updateDistances(objects);
  objects = resolveCollisions(objects);
  objects.forEach(object => object.setRadius());
  objects.forEach(object => object.resetForces());
  objects.forEach(object => calculateForces(objects, object));
  objects.forEach(object => object.updatePosition(1));

  const nextFrame = objects.map((object) => {
    const { radius, x, y, colour } = object;

    return { radius, colour, x, y }
  });

  return { objects, nextFrame };
};
