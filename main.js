Status = "";
fan_image = "";


function preload(){
    fan_image = loadImage("fdan.avif");
    AC_image = loadImage("ac.jpg");
    TV_image = loadImage("Tv.avif");
    Bottle_image = loadImage("bottle.jpg");
    LightBulb_image = loadImage("light bulb.jpg");
}



function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}