function mapX(x) {
  return map(x, -1, 1, 0, width);
}

function mapY(y) {
  return map(y, -1, 1, height, 0);
}

function randiansToDegrees(theta) {
  return theta * (180 / Math.PI);
}

function degreesToRadians(theta) {
  return theta * (Math.PI / 180);
}

function distanceToCentre(x, y) {
  return Math.sqrt((x * x) + (y * y));
}

function calculateCurrentAngle(x, y) {
  return Math.atan(y / x);
}

function calculateXDistance(theta, radius) {
  return Math.cos(theta) * radius;
}

function calculateYDistance(theta, radius) {
  return Math.sin(theta) * radius;
}

function populateYs() {
  for (var i = 1; i < x_vals.length; i++) {
    y_vals.push(0);
  }
}

function calculateInitialAngle() {
  for (var i = 1; i < x_vals.length; i++) {
    currentAngle.push(calculateCurrentAngle(x_vals[i], y_vals[i]));
  }
}
