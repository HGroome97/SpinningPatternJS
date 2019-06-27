let x_vals = [];
let y_vals = [];
let angleChange = [];
let currentAngle = []; //angles stored in degrees

function setup() {
  createCanvas(window.innerHeight, window.innerHeight - 100);
  background(0);
  x_vals.push(0);
  y_vals.push(0);

  x_vals.push(0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9);
  angleChange.push(1,2,3,1,2,3,1,2,3);//ensure same number of elements in x_vals and angleChange
  populateYs();
  calculateInitialAngle();
}

function updateCurrentAngles() {
  for (var i = 0; i < currentAngle.length; i++) {
    currentAngle[i]+=angleChange[i];
  }
}

function updatePoints(){
  for (var i = 1; i < x_vals.length; i++) {
    var radius = distanceToCentre(x_vals[i], y_vals[i]);
    x_vals[i] = calculateXDistance(degreesToRadians(currentAngle[i-1]), radius);
    y_vals[i] = calculateYDistance(degreesToRadians(currentAngle[i-1]), radius);
  }
}

function draw() {
  background(0);//comment out if you dont want it to reset
  stroke(255);
  updateCurrentAngles();
  updatePoints();

    for (let i = 1; i < x_vals.length; i++) {
      let x1 = mapX(x_vals[i - 1]);
      let y1 = mapY(y_vals[i - 1]);
      let x2 = mapX(x_vals[i]);
      let y2 = mapY(y_vals[i]);
      strokeWeight(1);
      line(x1, y1, x2, y2);
      strokeWeight(8);
      point(x1, y1);
    }
  point(mapX(x_vals[x_vals.length - 1]), mapY(y_vals[y_vals.length - 1]));

}
