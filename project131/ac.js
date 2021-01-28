img="";
status="";
objects=[];

 function preload(){
img = loadImage("ac.jpg");
}

function setup() {
    canvas=createCanvas(380, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(img, 0, 0, 380, 380); 

          r=random(255);
          g=random(255);
          b=random(255);

          objectDetector.detect(img, gotResult);

          for (i=0;i<objects.length;i++) { 
          document.getElementById("status").innerHTML = "Status : Object Detected"; 
          document.getElementById("number_of_objects").innerHTML="Number of objects detected are : "+ objects.length;
          
          fill(r,g,b); 
          percent = Math.floor(objects[i].confidence * 100); 
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15); 
          noFill(); 
          stroke(r,g,b); 
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height); 
        }
}

function logout() {
    window.location="index.html";
}