export const drawCircle = (canvasRef, circle) => {
  const canvas = canvasRef.current;
  const c = canvas.getContext('2d');
  c.beginPath();
  c.fillStyle = circle.colour;
  c.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
  c.fill();
};

export const drawCircles = (canvasRef, circles) => {
  const canvas = canvasRef.current;
  const c = canvas.getContext('2d');
  circles.forEach((circle) => {
    c.beginPath();
    c.fillStyle = circle.colour;
    c.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
    c.fill();
  });
};

export const clearCanvas = (canvasRef) => {
  const canvas = canvasRef.current;
  const c = canvas.getContext('2d');
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
};
