Status = "";
lightbulb_image = "";

function preload(){
lightbulb_image = loadImage("TV.jpg");
  }
  
  function setup() {
    canvas = createCanvas(640, 350);
    canvas.position(315,200);
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
  }
  
  function modelLoaded() {
    console.log("Model Loaded!");
    Status = true;
    object_detector.Detect(lightbulb_image,gotResults);
  }

  function gotResults(results, error) {
     if(error){
       console.error(error);
     }
     console.log(results)
  }

  function draw(){
    image(lightbulb_image,0,0,640,350);
  }