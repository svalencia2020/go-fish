var fishy 
var xPos 
var yPos 
var count 
var fish1 
var fish2
var rain
var fishpic 
var title 
var fishScore = 0;

function preload(){
	// mySound = loadSound('Dream_a_little_dream_of_me_-_Ukulele_instrumental.mp3');
}

function setup() { 
	frameRate(15);
	createCanvas(windowWidth, windowHeight); 
	background(100); 
	fishpic = loadImage("fish-1177208_960_720.png");

	imageMode(CENTER); 
xPos = 0; 
yPos = 500;
count = 0; 
	fish1 = new Fish (100,random(300,windowHeight-50),fishpic); 
	fish2 = new Fish (300,400,fishpic); 
	fish3 = new Fish (500,400,fishpic); 
	rain = loadImage('yay.png') 
	title = loadImage('titlee.png') 
	
	// mySound.setVolume(0.1);
	// mySound.play();
} 

//background details
function draw() { 
	background(181, 237, 255) //sky 
	fill(244, 248, 255)  //ice color  
	noStroke(0)
	rect(0,200,8500,50) //ice  
	fill( 72, 183, 214) //water color  
	rect(0,250,8500,8000)//water  
	fill(181, 237, 255) //for hole color 
	rect(760,200,150,50) // hole in ice 
	image(title,500,100,340,100) // title
	
	// // image(fishy,xPos,yPos,200,100)
	
	//fishing rod and line
	stroke(1); //for line to appear 
	strokeWeight(1); // for line 
	line(790,50,790,mouseY); //line 
	strokeWeight(7); //for fishing rod thickness  
	stroke(104, 72, 47) // fishing rod color 
	line(790,50,1000,200); // fishing rod 
	
	//fish
	fish1.show();
	fish1.move();
	fish1.reset(); 
	fish2.show();
	fish2.move(); 
	fish2.reset();
	fish3.show(); 
	fish3.move(); 
	fish3.reset();
	
	//snow!!!!
image(rain,300,50,400,300) // rainbow 
	snow(); //these make the snow! 
	snow(); //these make the snow! 
	snow(); //these make the snow! 
	snow(); //these make the snow! 
	snow(); //these make the snow! 
	snow(); //these make the snow! 
	snow(); //these make the snow! 
	snow(); //these make the snow! 
	snow();	//these make the snow! 
	
//scoreboard
	  if(fish1.isCaught() || fish2.isCaught() || fish3.isCaught()) {
    fishScore = fishScore + 1;
  }
  
  textSize(50);
  text(fishScore,1200,100);
		
	//scoreboard colors
if(fishScore <= 9){
	fill(204, 63, 67); //red
}
	
if(fishScore >= 10 && fishScore <= 19){
	fill(252, 148, 58); //orange
}

if(fishScore >= 20 && fishScore <= 29){
	fill(252, 226, 57); //yellow
}

if(fishScore >= 30 && fishScore <= 39){
	fill(70, 168, 28);//green
}

if(fishScore >= 40 && fishScore <=49){
	fill(25, 124, 255); //blue
}

if(fishScore >= 50 && fishScore <= 59){
	fill(121, 55, 178); //purple
}
	
	if(fishScore >= 60 && fishScore <= 69){
	fill(209, 23, 178); //pink
}
	}
	
	
	class Fish {   //fish object class 
	
	constructor(xStart,yStart,img) {  
		
		this.xPos = xStart; 
		this.yPos = yStart; 
		this.img = img;  
		this.speed = 2; 
	} 
	
	isCaught () { 
	if(mouseX >= this.xPos-50 && mouseX<= this.xPos +50 && mouseY >= this.yPos-50 &&  mouseY <= this.yPos+50 && mouseY <= this.yPos+50 && mouseX>=750 && mouseX<=820) {
		this.hide();
		return true
		}
		return false
	}
  
		
		hide (){
		this.xPos = - 200
	}
	
	show() { 
		image(this.img,this.xPos,this.yPos,100,100) //dont` touch this
	} 
	move () { 
		this.xPos = this.xPos +8;  
	}
	
	reset () {
		if (this.xPos>windowWidth) { 
		this.xPos = 0
		this.yPos = random(300,windowHeight-50)
		}
	}

}

function mousePressed() {
	fish1.isCaught();
	fish2.isCaught();
	fish3.isCaught();
}



function snow(){   // snow!
	noStroke();
	fill('white')  // white snow!
	ellipse(random(width),random(height),8) //snow circles 
}