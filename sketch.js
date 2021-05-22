var danceMonkeyButton, babySharkButton, driversLiscenseButton;
 var danceMonkey, babyShark, driversLiscense;
var pianoImage, piano;

function preload(){
pianoImage = loadImage("Screenshot 2021-05-22 184406.png");
}

function setup(){
createCanvas(1250,600);


fill("#A5E8CA");
danceMonkeyButton = createButton("Play Dance Monkey");
danceMonkeyButton.position(200,200);
danceMonkeyButton.mousePressed(danceMonkey);

fill("#A5E8CA");
babySharkButton = createButton("Play Baby Shark");
babySharkButton.position(200,300);
babySharkButton.mousePressed(babyShark);

fill("#A5E8CA");
driversLiscenseButton = createButton("Play Drivers Liscense");
driversLiscenseButton.position(200,400);
driversLiscenseButton.mousePressed(driversLiscense);




}

function draw(){
background("black");

fill("#E5CFFD");
textSize(50);
text(" Ultimate Piano Player!",420, 100);

drawSprites();
}

danceMonkey()
{
driversLiscenseButton.destroy();
danceMonkeyButton.destroy();
babySharkButton.destroy();

piano = createSprite(200,200,20,20);
piano.addImage(pianoImage,"Screenshot 2021-05-22 184406.png");



}

babyShark()
{

}

driversLiscense()
{

}