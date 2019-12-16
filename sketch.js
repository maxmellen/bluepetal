/// <reference types="p5/global" />

"use strict";

/**
 * @type {number}
 */
let d;

/**
 * @type {boolean}
 */
let looping;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB);
  rectMode(CENTER);
  noFill();
  d = 0;
  looping = true;
}

function draw() {
  background(0);
  // translate(width / 2, height / 2);
  rotate(HALF_PI);

  const S = min(width, height);
  const s = S / 2;
  const radD = radians(d);

  for (let a = 0; a < 360; a += 1) {
    push();

    const radA = radians(a);
    const x = cos(radA) * S / 4;
    const y = sin(radA) * S / 4;

    translate(x, y);
    rotate(radA * radD - QUARTER_PI);
    stroke(sin(radA + radD) * 60 + 300, 100, 100, 1 / 3);
    square(0, 0, s);

    pop();
  }

  d += 1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  if (looping) {
    console.log(d);
    noLoop();
    looping = false;
  } else {
    loop();
    looping = true;
  }
}

function keyPressed() {
  if (looping) return;
  if (key != 's') return;
  redraw();
}
