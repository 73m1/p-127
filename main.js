music1 = "";
music2 = "";

function setup() {
    canvas = createCanvas(900,600);
    canvas.center;
    video = createCapture(VIDEO);
    video.hide();
}

function preload() {
    music1 = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}

function draw() {
    image(video,0,0,900,600)
}