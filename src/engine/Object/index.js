export const createObject = (id, x, y, mass, radius, vx, vy, colour) => ({
  id,
  x,
  y,
  mass,
  radius,
  vx,
  vy,
  colour,
  ax: 0,
  ay: 0,
  fx: 0,
  fy: 0,
  resetForces() {
    this.fx = 0;
    this.fy = 0;
  },
  addForce(force) {
    this.fx += force.fx;
    this.fy += force.fy;
  },
  updateAcceleration() {
    this.ax += this.fx / this.mass;
    this.ay += this.fy / this.mass;
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