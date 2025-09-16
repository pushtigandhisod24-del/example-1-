function setup() {
  createCanvas(100, 300);

  background(400);

  // Start drawing the shape.
  beginShape();

  // Add vertices.
  vertex(10, 20);
  vertex(65, 30);
  vertex(85, 55);
  vertex(30, 75);

  // Stop drawing the shape.
  endShape(CLOSE);

  describe('A white square on a gray background.');
}