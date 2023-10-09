var videoCap;
var screenCap;

function setup() {
    createCanvas(windowHeight, windowWidth);
    capture = createCapture(VIDEO);
  // video.size(400, 400);

  // div = document.getElementById("container");
  // asciiDiv = createDiv();
  // asciiDiv.parent(div);

  // video.hide();
  // density = density5;

    // video.hide();
}



var isStatic = false;


function draw() {
    
    video = capture.get();

    
    colorMode(HSB, 360, 100, 100, 1);
    

    // video.loadPixels();

    
    // video.updatePixels();
    if (isStatic) {
        image(screenCap, 0, 0);
        // console.log("printing static image")
    } else {
        image(video, 0, 0);
    }

    // image(video, 0, 0);


    
}


function mousePressed() {
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


        if (hueVal > 10 && hueVal < 70) {
            screenCap.pixels[i + 0] = 200;
            screenCap.pixels[i + 1] = 0;
            screenCap.pixels[i + 2] = 200;
        }
        // console.log("Finished", hueVal);
        
    }
    screenCap.updatePixels();
    

    isStatic = !isStatic;

}





























































  /* JAVA
    
 Programming Project 1:
 The P.I.C.N.I.C Detector 5000
 (Perceivable Indicator of Compromised or Nascent Nutritional Integrity Characteristics)

 Program By: Neville Shaw
 File Name: FruitIntegrity.java
 Function: This program will attempt to vaguely estimate the approximate general ripeness of a banana, probably.
 

import java.awt.Color;
import java.awt.image.BufferedImage;
import java.io.*;
import javax.imageio.ImageIO;

//

import javax.swing.*;
import java.awt.*;
import java.io.File;
import java.io.IOException;

//

import java.util.Scanner;

public class FruitIntegrity {
    public static void main(String[] args) {
        // Declare and define Scanner to take input from user
        Scanner scan = new Scanner(System.in);

        if (args.length < 1 || args.length > 1) {
            System.out.println("Please use filepath of image as an argument in program call!");
            System.exit(0);
        }
        // System.out.println(args[0]);

        try {
            File file = new File(args[0]);
            BufferedImage image = ImageIO.read(file);

            System.out.println(args[0] + ": " + image.getHeight() + "-H, " + image.getWidth() + "-W");


            for (int x = 0; x < image.getWidth(); x++) {
                for (int y = 0; y < image.getHeight(); y++) {
                    int rgb = image.getRGB(x, y);

                    // Components will be in the range of 0..255:
                    int blue = rgb & 0xff;
                    int green = (rgb & 0xff00) >> 8;
                    int red = (rgb & 0xff0000) >> 16;

                    // Convert to HSB values
                    float[] hsb = Color.RGBtoHSB(red, green, blue, null);
                    // Scale hsb to a value above 1 for convienence
                    hsb[0] *= 359;

                    // 40 to 60 - Bananas.jpg
                    //


                    if (hsb[0] > 40 && hsb[0] < 50) {
                        // System.out.println(hsb[0]);

                        // int finalRGB = Color.HSBtoRGB(hsb[0] / 359, hsb[1], hsb[2]);


                        image.setRGB(x, y, -1);
                    }
                    // System.out.println(hsb[0]);
                }
            }
            // f = new File("out.jpeg");
            ImageIO.write(image, "jpeg", new File("out.jpeg"));
            // System.out.print(" ");

            System.out.println("File written succesfully");

        } catch (IOException e) {
            // System.out.println("Use a real file dude!");
            // System.exit(0);
            e.printStackTrace();
            System.exit(0);
        }





        /*

        //read image file
        File file1 = new File("E:\\dp.jpg");
        BufferedImage image1 = ImageIO.read(file1);

        //write file
        FileWriter fstream = new FileWriter("E:\\pixellog.txt");
        BufferedWriter out = new BufferedWriter(fstream);

        //color object
        //Color cyan = new Color(0, 255, 255);

        //find cyan pixels
        for (int y = 0; y < image1.getHeight(); y++) {
            for (int x = 0; x < image1.getWidth(); x++) {

                int c = image1.getRGB(x, y);

                int red = (c & 0x0000FFFF) >> 16;
                int green = (c & 0x0000FFFF) >> 8;
                int blue = c & 0x0000FFFF;

                //  int tofind = 0x0000FFFF;

                //int tofind = Color.cyan.getRGB();

                //int  col = image1.getRGB(x, y);

                //if (col == tofind){

                //if (cyan.equals(image1.getRGB(x, y)){
                //if (Color.cyan.getRGB() == image1.getRGB(x, y)) {


                if (red < 30 && green > 255 && blue > 255) {
                    out.write("CyanPixel found at=" + x + "," + y);


                }
            }
        }


        
    }
}


  */

  // let asciiImage = '';
  // for (let j = 0; j < video.height; j++) {
  //   for (let i = 0; i < video.width; i++) {
  //     const pixelIndex = (i + j * video.width) * 4;
  //     const r = video.pixels[pixelIndex  + 0];
  //     const g = video.pixels[pixelIndex  + 1];
  //     const b = video.pixels[pixelIndex  + 2];
  //     const avg = (r + g + b) / 3;
  //     const len = density.length;

  //     if (!densityBool) {
  //       charIndex = floor(map(avg, 0, 255, 0, len));
  //     } else {
  //       charIndex = floor(map(avg, 0, 255, len, 0));
  //     }

  //     const c = density.charAt(charIndex);
  //     if (c == ' ') asciiImage += '&nbsp;'
  //     else asciiImage += c;

  //   }
  //   asciiImage += '<br/>';
  // }

  // asciiDiv.html(asciiImage);


// function mousePressed() {
//   // if (key == 'K') {
//     densityBool = !densityBool;

//   //}

// }
// function keyPressed() {
//   if (key == '1') {
//     density = density1;
//   } else if (key == '2') {
//     density = density2
//   } else if (key == '3') {
//     density = density3
//   } else if (key == '4') {
//     density = density4;
//   } else if (key == '5') {
//     density = density5;
//   }

// }
