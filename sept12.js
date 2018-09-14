var canvas;





function setup() {
 canvas = createCanvas(900, 600);
 canvas.position(300, 0);
 ellipseMode(CENTER);
}


function draw(){
	background (150);
	clear();

	
stroke(255);
line( 600,0, 800, 250);

     
noStroke ();  
fill(0, 150, 0);
ellipse(500, 50, 20);


fill(150, 0, 0);
ellipse(600, 0, 20);

fill(0, 0, 150);
ellipse(800, 250, 80);
	

fill(0, 100, 100);
ellipse(400, 400, 60);

    
}


function showsecret(){
document.getElementById("secret").style.display = "block";

}

function hidesecret(){
document.getElementById("secret").style.display = "none";
	
	

