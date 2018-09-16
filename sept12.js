var canvas;





function setup() {
 canvas = createCanvas(1000, 650);
 canvas.position(300, 50);
 ellipseMode(CENTER);
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
	
//blue1andblue2//
stroke(255);
line(145, 325, 250, 335);
	
//blue2andgreen3//	
stroke(255);
line(250, 335, 377, 183);
	
//blue2andyellow2//
stroke(255);
line(250, 335, 200,420);

//yellow2andturquoise2//
stroke(255);
line(450, 400, 200,420);

//red2andtruq2//
stroke(255);
line(350, 290, 450, 400)

//yellow3andblue2//
stroke(255);
line(250, 335, 350, 370)
	
//yellow3andtruq2//
stroke(255);
line(350, 370, 450, 400)
	
//yellow2andgreen4//
stroke(255);
line(300, 480, 200, 420)
	
//turq2andgreen4//
stroke(255);
line(450, 400, 300, 480)
	
//red3andyellow2//	
stroke(255);
line(200, 420, 130, 510)
	
//red3andblue1//	
stroke(255);
line(130, 510, 145, 325)
	
//blue1andblue3//
stroke(255);
line(145, 325, 200, 620)
	
//turq2andblue3//
stroke(255);
line(200, 620, 450, 400)
	
//yellow2andblue3//
stroke(255);
line(200, 420, 200, 620)
	
//yello1andblue4//	
stroke(255);
line(400, 55, 250,80)

//turq1andblue4//
stroke(255);
line(231, 260, 400, 55)
	
//turq5andgreen1//
stroke(255);
line(250, 40, 150, 40)
	
//turq5andgreen3//
stroke(255);
line(250, 40, 377, 183)
	
//yellow3andyellow4//
stroke(255);
line(487, 250, 200, 420)

//turq2andred4//
stroke(255);
line(230, 260, 369, 620)	
//turq2andred4//
stroke(255);
line(490, 535, 369, 620)
	
//blue4andturq2
stroke(255);
line(400, 55, 450, 400)

//turq4andred4//
stroke(255);
line(500, 100, 369, 620)
	
//green5andred4//
stroke(255);
line(440, 610, 350, 370)
	
//green1andred5//
stroke(255);
line(150,40, 445, 185)	
	
//blu4andblue6//
stroke(255);
line(400, 55, 620, 210)
	
//turq2ndblue6//
stroke(255);
line(450, 400, 620, 210)	
//green6andblue6
stroke(255);
line(580, 480, 620, 210)
	
//green6andturq2//
stroke(255);
line(580, 480, 450,400,)

//red7andgreen3//
stroke(255);
line(560, 400, 377,183,)
	
//red7andturq4//
stroke(255);
line(560, 400, 500, 100,)
		
//red7andturq4//
stroke(255);
line(600, 50, 200,420)

//green7andyellow2//
stroke(255);
line(690, 350, 200,420)

//red8andyellow2//
stroke(255);
line(678, 127, 690, 350)
	
//red8andyellow2//
stroke(255);
line(678, 127, 487, 250,)
	
//red8andyellow2//
stroke(255);
line(690, 350, 487, 250,)

//turq2and5//	
stroke(255);	
line(537, 570, 450, 400)
	
//turq2andred7//	
stroke(255);	
line(537, 570, 678, 127,)
	
//r6andt5//	
stroke(255);	
line(600, 50, 720, 20)
	
//t5andg7//
stroke(255);	
line(776,340,600,50)
	
	
//y9andg8//
stroke(255);	
line(776,340,885,500)
	
//y8andy9//
stroke(255);	
line(820,150, 885,500)

	
//y6andy9//	
stroke(255);	
line(670,543, 885,500)
	
//g9andy9//	
stroke(255);	
line(800,80, 670,543,)
	
//r8andy9//	
stroke(255);	
line(900, 220, 670,543,)
		
//g10andt6//	
stroke(255);	
line(90,630, 900, 320,)
	
//r8andy2//	
stroke(255);	
line(900, 220, 200,420,)

//g14andg5//	
stroke(255);	
line(950,150,440, 610,)

//g11andt5//	
stroke(255);	
line(725,445,720,20,)
	
//r9andb4//	
stroke(255);	
line(780,530,400, 55,)
	
//r9andt5//	
stroke(255);	
line(780,530,720, 20)
	
//g12andb4//	
stroke(255);	
line(700,630,400, 55,)
	
//X//	
stroke(255);	
line(725,445,720,20,)
	
//g12andt7//	
stroke(255);	
line(700,630, 832, 430,)
	
//g12andy5//	
stroke(255);	
line(700,630, 400,503,)
	
//g9andr3//	
stroke(255);	
line(800,80,130, 510)
	
	
	

	
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
	
//green circle4//     
noStroke ();  
fill(124, 229, 119);
ellipse(300,480, 22);
	
//green circle5//     
noStroke ();  
fill(124, 229, 119);
ellipse(440, 610, 7);
	
//green circle6//     
noStroke ();  
fill(124, 229, 119);
ellipse(580, 480, 27);
	
//green circle7//     
noStroke ();  
fill(124, 229, 119);
ellipse(690, 350, 15);	

//green circle8//     
noStroke ();  
fill(124, 229, 119);
ellipse(776,340, 30);

//green circle9//     
noStroke ();  
fill(124, 229, 119);
ellipse(800,80, 20);
	
//green circle10//     
noStroke ();  
fill(124, 229, 119);
ellipse(90,630, 15);

//green circle11//     
noStroke ();  
fill(124, 229, 119);
ellipse(725,445, 5);
		
//green circle12//     
noStroke ();  
fill(124, 229, 119);
ellipse(700,630, 20);
	
//green circle13//     
noStroke ();  
fill(124, 229, 119);
ellipse(50,680, 15);

	
//green circle14//     
noStroke ();  
fill(124, 229, 119);
ellipse(950,150, 5);

	
	
	
//red circle1//
fill(235, 0, 86);
ellipse(285, 135, 13);
	
//red circle2//
fill(235, 0, 86);
ellipse(350, 290, 22);
	
//red circle3//
fill(235, 0, 86);
ellipse(130, 510, 25);

//red circle4//
fill(235, 0, 86);
ellipse(369, 620, 35);
	
//red circle5//
fill(235, 0, 86);
ellipse(445, 185, 7);
	
//red circle6//
fill(235, 0, 86);
ellipse(600, 50, 20);	
	
//red circle7//
fill(235, 0, 86);
ellipse(560, 400, 12);	
	
//redcircle8//
fill(235, 0, 86);
ellipse(678, 127, 30);
	
//redcircle8//
fill(235, 0, 86);
ellipse(900, 220, 20);	
	
//redcircle9//     
noStroke ();  
fill(235, 0, 86);
ellipse(780,530, 18);
	
	
	
	
//blue circle1//
fill(154, 196, 248);
ellipse(145, 325, 28);
	
//bluecircle2//     
fill(154, 196, 248);
ellipse(250,335, 10);

//bluecircle3//     
noStroke ();  
fill(154, 196, 248);
ellipse(200,620, 5);
	
//blue circle4//
fill(154, 196, 248);
ellipse(400, 55, 25);
	
//blue circle5//
fill(154, 196, 248);
ellipse(490, 535, 15);
	
//blue circle6//
fill(154, 196, 248);
ellipse(620, 210, 35);
	
//blue circle77//
fill(154, 196, 248);
ellipse(800, 250, 40);

	
	
	
	
//yellow circle1//     
noStroke ();  
fill(241, 154, 62);
ellipse(250,80, 15);
	
//yellow circle2//     
noStroke ();  
fill(241, 154, 62);
ellipse(200,420, 35);
	
//yellow circle3//
fill(241, 154, 62);
ellipse(350, 370, 7);

//yellow circle4//
fill(241, 154, 62);
ellipse(487, 250, 40);
	
//yellow circle5//     
noStroke ();  
fill(241, 154, 62);
ellipse(400,503, 12);
	
//yellow circle6//     
noStroke ();  
fill(241, 154, 62);
ellipse(670,543, 22);
	
//yellow circle7//     
noStroke ();  
fill(241, 154, 62);
ellipse(600,120, 18);


//yellow circle8//     
noStroke ();  
fill(241, 154, 62);
ellipse(820,150, 25);
	
//yellow circle9//     
noStroke ();  
fill(241, 154, 62);
ellipse(885,500, 18);

	
	
	
	
//turquoise circle1//
noStroke ();  
fill(171, 231, 198);
ellipse(230, 260, 30);
	
//turquoisecircle2//
fill(171, 231, 198);
ellipse(450, 400, 50);


//turquoisecircle3//
fill(171, 231, 198);
ellipse(250, 40, 10);	
	
//turquoisecircle4//     
noStroke ();  
fill(171, 231, 198);
ellipse(500, 100, 20);
	
//turquoisecircle5//     
noStroke ();  
fill(171, 231, 198);
ellipse(537, 570, 20);

//turquoisecircle5//     
noStroke ();  
fill(171, 231, 198);
ellipse(720, 20, 10);
	
//turquoisecircle6//     
noStroke ();  
fill(171, 231, 198);
ellipse(900, 320, 10);
	
//turquoisecircle7//     
noStroke ();  
fill(171, 231, 198);
ellipse(832, 430, 25);
	
	
	
	

	



	

	






	

	

	



	
	
	
	









	
	
	

	

	

	

	

	

	

	

	


    
}

