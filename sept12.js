var canvas;





function setup() {
 canvas = createCanvas(1200, 800);
 canvas.position(300, 0);
 ellipseMode(CENTER);
}


function draw(){
	background (150);
	clear();


//1and2green//	
stroke(255);
line(150, 40, 100, 200);
	
//1redand2green//	
stroke(255);
line(100, 200, 285, 135);
	
//2greenand1blue//
stroke(255);
line(100, 200, 145, 325);
	
//1redand1blue//
stroke(255);
line(285, 135, 145, 325);
	
//1yellowand1green//
stroke(255);
line(150, 40, 250, 80);
	
//1yellowand1red//
stroke(255);
line(250, 80, 285, 135);

//1yellowand1turquoise//
stroke(255);
line(250, 80, 230, 260);
	
//1greenand1turquoise//
stroke(255);
line(150, 40, 230, 260);

	
//1turqouseand2yellow//
stroke(255);
line(230, 260, 200, 420);
	
//1turqouseand2red//
stroke(255);
line(230, 260, 350, 290);
	
//3greenand2red//
stroke(255);
line(377, 183, 350, 290);
		
	
//1turqand3green//
stroke(255);
line(230, 260, 377, 183);
	
//1yellowand2red//
stroke(255);
line(200, 420, 350, 290);
	
	
	
//green circle1//     
noStroke ();  
fill(124, 229, 119);
ellipse(150,40, 5);
	
//green circle2//     
noStroke ();  
fill(124, 229, 119);
ellipse(100, 200, 40);
	
//green circle3//     
noStroke ();  
fill(124, 229, 119);
ellipse(377,183, 25);
	
//red circle1//
fill(235, 0, 86);
ellipse(285, 135, 13);
	
//red circle2//
fill(235, 0, 86);
ellipse(350, 290, 16);
	
//blue circle1//
fill(154, 196, 248);
ellipse(145, 325, 28);
	
	
//yellow circle1//     
noStroke ();  
fill(241, 154, 62);
ellipse(250,80, 15);
	
//yellow circle2//     
noStroke ();  
fill(241, 154, 62);
ellipse(200,420, 35);	

	
//turquoise circle1//
noStroke ();  
fill(171, 231, 198);
ellipse(230, 260, 30);
	




	
//green circle13//     
noStroke ();  
fill(124, 229, 119);
ellipse(50,680, 5);

//green circle//     
noStroke ();  
fill(124, 229, 119);
ellipse(500, 50, 30);
	

	
//green circle3//     
noStroke ();  
fill(124, 229, 119);
ellipse(90,700 , 15);

//green circle4//     
noStroke ();  
fill(124, 229, 119);
ellipse(300,450, 30);

//green circle5//     
noStroke ();  
fill(124, 229, 119);
ellipse(700,630, 20);

//green circle6//     
noStroke ();  
fill(124, 229, 119);
ellipse(650,350, 15);
	
//green circle6//     
noStroke ();  
fill(124, 229, 119);
ellipse(1000,500, 30);
	
//green circle7//     
noStroke ();  
fill(124, 229, 119);
ellipse(800,80, 20);
	
	
//green circle9//     
noStroke ();  
fill(124, 229, 119);
ellipse(300,360, 5);

//green circle10//     
noStroke ();  
fill(124, 229, 119);
ellipse(450,480, 5);

//green circle11//     
noStroke ();  
fill(124, 229, 119);
ellipse(725,445, 5);
	
//green circle12//     
noStroke ();  
fill(124, 229, 119);
ellipse(950,150, 5);


//green circle14//     
noStroke ();  
fill(124, 229, 119);
ellipse(200,620, 5);


	
	
	

	
//red circle1//
fill(235, 0, 86);
ellipse(600, 50, 20);
	

	
//red circle3//
fill(235, 0, 86);
ellipse(545, 185, 18);
	
//red circle4//
fill(235, 0, 86);
ellipse(400, 75, 15);
	
//red circle5//
fill(235, 0, 86);
ellipse(728, 177, 30);
	

	
//blue circle//
fill(0, 0, 150);
ellipse(800, 250, 40);
	
//turquoise circle//
fill(0, 100, 100);
ellipse(400, 400, 60);

    
}


function showownerleave(){
document.getElementById("secret").style.display = "block";
	
}

function hideownerleave(){
document.getElementById("secret").style.display = "none";
}


            function showheidi(){
                document.getElementById("heidi").style.display = "block";
            }

            function hideheidi(){
                document.getElementById("heidi").style.display = "none";
            }


function showsecret(){
document.getElementById("secret").style.display = "block";
	
}

function hidesecret(){
document.getElementById("secret").style.display = "none";
}


