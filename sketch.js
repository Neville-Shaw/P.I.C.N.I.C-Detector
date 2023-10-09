var videoCap;
var screenCap;

var hueMin = 20; // 38
var hueMax = 38; // 46

var saturationMin = 41;

// 38 - 70 is good on iphone?!!?!?!!?!

var hueMinSlider;
var hueMaxSlider;

var saturationMinSlider;

var text1;
var text2;

var p;

var isStatic = false;

function setup() {
    p = createCanvas(windowWidth-50, windowHeight-80);
    capture = createCapture(VIDEO);
    // createCanvas(capture.width * 3, capture.height *4);
    // capture.size(width, height);

    

    // p.size(capture.width * 3, capture.height *4);
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


    saturationMinSlider = createSlider(0, 360, saturationMin);
    saturationMinSlider.position(10, 590);

    // hueMinSlider.value() = 10;
    // hueMaxSlider.value() = 70;
    // fill(255, 255, 255);
    
    textSize(20);

    console.log(RGBtoHSB(119, 115, 29));

}

function draw() {
    p.width = capture.width;
    p.height = capture.height + 160;

    background(71, 71, 71);
    video = capture.get();

    if (isStatic) {
        image(screenCap, 0, 0, capture.width, capture.height);
        // console.log("printing static image")
    } else {
        image(video, 0, 0, capture.width, capture.height);
    }
    
    text(hueMinSlider.value(), 150, 35 + capture.height);
    text(hueMaxSlider.value(), 150, 75 + capture.height);

    text(saturationMinSlider.value(), 150, 125 + capture.height);


    hueMin = hueMinSlider.value();
    hueMax = hueMaxSlider.value();

    saturationMin = saturationMinSlider.value();

    hueMinSlider.position(10, capture.height + 20);
    hueMaxSlider.position(10, capture.height + 60);


    
}


function mousePressed() {
    if ((mouseX > 0 && mouseX < capture.width) && (mouseY > 0 && mouseY < capture.height)) {

    


        screenCap = capture.get();

        screenCap.loadPixels();

        let hue = 0;

        // console.log(videoCap.pixels.length);
        for (var i = 0; i < screenCap.pixels.length; i += 4) {
            
                


            // const pixelIndex = (i + j * screenCap.width) * 4;


            var red = screenCap.pixels[i + 0];
            var green = screenCap.pixels[i + 1];
            var blue = screenCap.pixels[i + 2];
            
            // hue = RGBtoHue(red, green, blue);
            HSB = RGBtoHSB(red, green, blue);


            hue = HSB[0];
            let saturation = HSB[1];
            let brightness = HSB[2];


            if ((hue > hueMin && hue < hueMax) && (saturation > saturationMin)) {
                screenCap.pixels[i + 0] = 200;
                screenCap.pixels[i + 1] = 0;
                screenCap.pixels[i + 2] = 200;
            }


            // if (hue > hueMin && hue < hueMax) {
            //     screenCap.pixels[i + 0] = 200;
            //     screenCap.pixels[i + 1] = 0;
            //     screenCap.pixels[i + 2] = 200;
            // }
            // console.log("Finished", hueVal);
        }
        screenCap.updatePixels();
        
        isStatic = !isStatic;
    }

}



function RGBtoHSB(r, g, b) {



    r /= 255;
    g /= 255;
    b /= 255;
    const v = Math.max(r, g, b), n = v - Math.min(r, g, b);
    const h = n === 0 ? 0 : n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;
    
    return [60 * (h < 0 ? h + 6 : h), v && (n / v) * 100, v * 100];
}

function RGBtoHue(r, g, b) {



    // r /= 255;
    // g /= 255;
    // b /= 255;
    // const v = Math.max(r, g, b), n = v - Math.min(r, g, b);
    // const h = n === 0 ? 0 : n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;


    // return [60 * (h < 0 ? h + 6 : h), v && (n / v) * 100, v * 100];







    /*

    let hue = 0;

    var min = Math.min(Math.min(red, green), blue);
    var max = Math.max(Math.max(red, green), blue);

    if (min == max) {
        hue = 0;
    }

    if (max == red) {
        hue = (green - blue) / (max - min);

    } else if (max == green) {
        hue = 2 + (blue - red) / (max - min);

    } else {
        hue = 4 + (red - green) / (max - min);
    }

    hue = hue * 60;
    if (hue < 0) hue = hue + 360;

    hue = Math.round(hue);

    return hue;

    */
}




