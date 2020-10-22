export const createObject = (id, x, y, mass, vx, vy, colour) => ({
  id,
  x,
  y,
  mass,
  radius: 0,
  vx,
  vy,
  colour,
  ax: 0,
  ay: 0,
  fx: 0,
  fy: 0,
  collisionDetected: [],
  distanceFromOtherObjects: {},
  setRadius() {
    this.radius = (Math.cbrt(this.mass))/15;
  },
  resetForces() {
    this.fx = 0;
    this.fy = 0;
  },
  addForce(force) {
    this.fx += force.fx;
    this.fy += force.fy;
  },
  updateAcceleration() {
    this.ax = this.fx / this.mass;
    this.ay = this.fy / this.mass;
  },
  updateVelocity() {
    this.vx += this.ax;
    this.vy += this.ay;
  },
  updatePosition(scaleFactor) {
    this.updateAcceleration();
    this.updateVelocity();
    this.x += this.vx / scaleFactor;
    this.y += this.vy / scaleFactor;
  },
});