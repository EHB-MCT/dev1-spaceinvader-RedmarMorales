"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawSpaceinvader();

function drawSpaceinvader() {
    //background
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fill();

    //spaceinvader
    context.fillStyle = '#66FF00';
    context.beginPath();
    context.rect(75, 80, 50, 80);
    context.rect(175, 80, 50, 130);
    context.rect(275, 80, 50, 80);
    context.rect(125, 120, 50, 130);
    context.rect(225, 120, 50, 130);
    context.rect(75, 210, 50, 80);
    context.rect(275, 210, 50, 80);
    context.fill();
}