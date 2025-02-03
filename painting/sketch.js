let slider1, slider2, slider3;
let buttonBrush, buttonEraser, buttonSave, buttonUndo;
let isEraser = false;
let brushSize = 10;
let strokes = [];
let currentStroke = [];



function setup() {
  createCanvas(600, 400);
  
  background(220);
  
  fill(200);
  noStroke();
  rect(0, 0, 150, height);
  
  textSize(12);
  fill(0);
  text('R', 10, 50);
  text('G', 10, 80);
  text('B', 10, 110);
  text('Brush Size', 10, 140);
  
  slider1 = createSlider(0, 255, 0);
  slider1.position(10, 20);
  slider2 = createSlider(0, 255, 0);
  slider2.position(10, 50);
  slider3 = createSlider(0, 255, 0);
  slider3.position(10, 80);
  sliderSize = createSlider(1, 50, 10);
  sliderSize.position(10, 110);
  
  fill(100);
  rect(10, 150, 80, 40);
  
  buttonBrush = createButton('Brush');
  buttonBrush.position(10, 210);
  buttonBrush.mousePressed(() => (isEraser = false));
  
  buttonEraser = createButton('Eraser');
  buttonEraser.position(10, 240);
  buttonEraser.mousePressed(() => (isEraser = true));
  
  buttonSave = createButton('Save');
  buttonSave.position(10, 270);
  buttonSave.mousePressed(saveCanvasImage);
  
  buttonUndo = createButton('Undo');
  buttonUndo.position(10, 300);
  buttonUndo.mousePressed(undoLastStroke);
  
}



function draw() {
  
  fill(slider1.value(), slider2.value(), slider3.value());
  noStroke();
  rect(10, 150, 80, 40);
  
  brushSize = sliderSize.value();
    
  if(mouseIsPressed && mouseX > 150){
    let strokeColor = isEraser ? color(220) : color(slider1.value(), slider2.value(), slider3.value());
    
    stroke(strokeColor);
    
    strokeWeight(brushSize);
  
    line(pmouseX, pmouseY, mouseX, mouseY)
    
    currentStroke.push({x1: pmouseX, y1: pmouseY, x2: mouseX, y2: mouseY, color: strokeColor, weight: brushSize });
  }
}

function mouseReleased(){
  if(currentStroke.length > 0){
    strokes.push(currentStroke);
    currentStroke = [];
  }
}

function saveCanvasImage(){
  saveCanvas('myDrawing', 'png');
}

function undoLastStroke(){
  if(strokes.length > 0){
    strokes.pop();
    redrawCanvas();
  }
}

function redrawCanvas(){
  background(220);
  
  fill(200);
  noStroke();
  rect(0, 0, 150, height);
  
  textSize(12);
  fill(0);
  text('R', 10, 50);
  text('G', 10, 80);
  text('B', 10, 110);
  text('Brush Size', 10, 140);
  
  fill(slider1.value(), slider2.value(), slider3.value());
  noStroke();
  rect(10, 150, 80, 40);
  
  for(let savedStroke of strokes){
    for(let segment of savedStroke){
      stroke(segment.color);
      strokeWeight(segment.weight);
      line(segment.x1, segment.y1, segment.x2, segment.y2);
    }
  }
}                                                                                                         

function keyPressed(){
  if(key === 'B' || key === 'b'){
    isEraser = false;
  }
  else if(key === 'E' || key === 'e'){
    isEraser = true;
  }
  else if(key === 'S' || key === 's'){
    saveCanvasImage();
  }
  else if(key === 'Z' || key === 'z'){
    undoLastStroke();
  }
}