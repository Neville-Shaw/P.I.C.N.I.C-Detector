var videoCap;
var screenCap;

var hueMin = 10;
var hueMax = 70;

// 38 - 70 is good on iphone?!!?!?!!?!

var hueMinSlider;
var hueMaxSlider;

var text1;
var text2;

function setup() {
    createCanvas(windowWidth-50, windowHeight-80);
    capture = createCapture(VIDEO);
    // capture.size(width, height);

  // div = document.getElementById("container");
  // asciiDiv = createDiv();
  // asciiDiv.parent(div);

  // video.hide();
  // density = density5;

    capture.hide();

    hueMinSlider = createSlider(0, 360, hueMin);
    hueMinSlider.position(10, 500);
    // hueMinSlider.style(width, '80px');

    hueMaxSlider = createSlider(0, 360, hueMax);
    hueMaxSlider.position(10, 540);
    // hueMaxSlider.size(300, 500);



    // hueMinSlider.value() = 10;
    // hueMaxSlider.value() = 70;
    // fill(255, 255, 255);
    
    textSize(20);

}



var isStatic = false;


function draw() {
    background(71, 71, 71);
    video = capture.get();

    
    // colorMode(HSB, 360, 100, 100, 1);
    

    // video.loadPixels();

    
    // video.updatePixels();
    if (isStatic) {
        image(screenCap, 0, 0);
        // console.log("printing static image")
    } else {
        image(video, 0, 0);
    }

    // image(video, 0, 0);

    
    text(hueMinSlider.value(), 150, 25 + 490);
    text(hueMaxSlider.value(), 150, 65 + 490);

    hueMin = hueMinSlider.value();
    hueMax = hueMaxSlider.value();

    hueMinSlider.position(10, capture.height + 20);
    hueMaxSlider.position(10, capture.height + 60);
}


function mousePressed() {
    if ((mouseX > 0 && mouseX < capture.width) && (mouseY > 0 && mouseY < capture.height)) {

    


        screenCap = capture.get();

        screenCap.loadPixels();

        // console.log(videoCap.pixels.length);
        for (var i = 0; i < screenCap.pixels.length; i += 4) {
            
                


            // const pixelIndex = (i + j * screenCap.width) * 4;


            var red = screenCap.pixels[i + 0];
            var green = screenCap.pixels[i + 1];
            var blue = screenCap.pixels[i + 2];
            

            var min = Math.min(Math.min(red, green), blue);
            var max = Math.max(Math.max(red, green), blue);

            if (min == max) {
                hue = 0;
            }

            var hue = 0;
            if (max == red) {
                hue = (green - blue) / (max - min);

            } else if (max == green) {
                hue = 2 + (blue - red) / (max - min);

            } else {
                hue = 4 + (red - green) / (max - min);
            }

            hue = hue * 60;
            if (hue < 0) hue = hue + 360;

        

            
        
            // console.log(hue(c));
            // screenCap.updatePixels();

            var hueVal = hue;


            if (hueVal > hueMin && hueVal < hueMax) {
                screenCap.pixels[i + 0] = 200;
                screenCap.pixels[i + 1] = 0;
                screenCap.pixels[i + 2] = 200;
            }
            // console.log("Finished", hueVal);
            
        }
        screenCap.updatePixels();
        
        isStatic = !isStatic;

    }

}







