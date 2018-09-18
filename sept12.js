var canvas;
var ellipse;


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
	
//red8andyellow6//
stroke(255);
line(678, 127, 600, 120,)
	
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
	
	
//y7andt5//	
stroke(255);	
line(600,120,720,20,)
	
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
	
//y8andg12//	
stroke(255);	
line(820,150,700,630)
	

	
	
//green circle1//     
noStroke ();  
fill(124, 229, 119);
ellipse(150,40, 5);
	

//green circle2//     
noStroke ();  
fill(124, 229, 119);
ellipse(100, 200, 40);

	
   if( dist(mouseX, mouseY, 100, 200) < 40) {
	   				
                    document.getElementById("srira").style.display = "block";
                }else{
                    document.getElementById("srira").style.display = "none";
		
				}
	
	   

//green circle3//     
noStroke ();  
fill(124, 229, 119);
ellipse(377,183, 25);
	
   if( dist(mouseX, mouseY, 377, 183) < 25) {
                    document.getElementById("shiso").style.display = "block";
                }else{
                    document.getElementById("shiso").style.display = "none";
		
				}
		


	
//green circle4//     
noStroke ();  
fill(124, 229, 119);
ellipse(300,480, 22);
	
   if( dist(mouseX, mouseY, 300, 480) < 22) {
                    document.getElementById("noodle").style.display = "block";
                }else{
                    document.getElementById("noodle").style.display = "none";
		
				}
		

	
//green circle5//     
noStroke ();  
fill(124, 229, 119);
ellipse(440, 610, 7);
	
//green circle6//     
noStroke ();  
fill(124, 229, 119);
ellipse(580, 480, 27);
	
   if( dist(mouseX, mouseY, 580, 480) < 27) {
                    document.getElementById("soba").style.display = "block";
                }else{
                    document.getElementById("soba").style.display = "none";
		
				}
		
	
//green circle7//     
noStroke ();  
fill(124, 229, 119);
ellipse(690, 350, 15);	

//green circle8//     
noStroke ();  
fill(124, 229, 119);
ellipse(776,340, 30);
	
	
   if( dist(mouseX, mouseY, 776, 340) < 30) {
                    document.getElementById("seasame").style.display = "block";
                }else{
                    document.getElementById("seasame").style.display = "none";
		
				}
		

//green circle9//     
noStroke ();  
fill(124, 229, 119);
ellipse(800,80, 20);
	

	   if( dist(mouseX, mouseY, 800, 80) < 20) {
                    document.getElementById("chips").style.display = "block";
                }else{
                    document.getElementById("chips").style.display = "none";
		
				}
	
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
	
		   if( dist(mouseX, mouseY, 700, 630) < 20) {
                    document.getElementById("apr").style.display = "block";
                }else{
                    document.getElementById("apr").style.display = "none";
		
				}

	
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
	
	 if( dist(mouseX, mouseY, 350, 290) < 22) {
                    document.getElementById("mar").style.display = "block";
                }else{
                    document.getElementById("mar").style.display = "none";
		
				}
	
	
//red circle3//
fill(235, 0, 86);
ellipse(130, 510, 25);
	
	 if( dist(mouseX, mouseY, 130, 510) < 25) {
                    document.getElementById("feb").style.display = "block";
                }else{
                    document.getElementById("feb").style.display = "none";
		
				}
	


//red circle4//
fill(235, 0, 86);
ellipse(369, 620, 35);
	
   if( dist(mouseX, mouseY, 369, 620) < 35) {
                    document.getElementById("ketchup").style.display = "block";
                }else{
                    document.getElementById("ketchup").style.display = "none";
		
				}
	
//red circle5//
fill(235, 0, 86);
ellipse(445, 185, 7);
	
//red circle6//
fill(235, 0, 86);
ellipse(600, 50, 20);	
	
	
 if( dist(mouseX, mouseY, 600, 50) < 20) {
                    document.getElementById("pasta").style.display = "block";
                }else{
                    document.getElementById("pasta").style.display = "none";
				
				}
	
	
//red circle7//
fill(235, 0, 86);
ellipse(560, 400, 12);	
	
//redcircle8//
fill(235, 0, 86);
ellipse(678, 127, 30);
	
   if( dist(mouseX, mouseY, 678, 127) < 30) {
                    document.getElementById("water").style.display = "block";
                }else{
                    document.getElementById("water").style.display = "none";
		
				}
	
//redcircle8//
fill(235, 0, 86);
ellipse(900, 220, 20);	
	
	
 if( dist(mouseX, mouseY, 900, 220) < 20) {
                    document.getElementById("oil").style.display = "block";
                }else{
                    document.getElementById("oil").style.display = "none";
		
				}
	
	
//redcircle9//     
noStroke ();  
fill(235, 0, 86);
ellipse(780,530, 18);

	
	 if( dist(mouseX, mouseY, 780, 530) < 18) {
                    document.getElementById("jan").style.display = "block";
                }else{
                    document.getElementById("jan").style.display = "none";
		
				}
	
	
	
	
//blue circle1//
fill(154, 196, 248);
ellipse(145, 325, 28);
	
	
   if( dist(mouseX, mouseY, 145, 325) < 28) {
                    document.getElementById("teriyaki").style.display = "block";
                }else{
                    document.getElementById("teriyaki").style.display = "none";
		
				}
	
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
	

	
   if( dist(mouseX, mouseY, 400, 55) < 25) {
                    document.getElementById("ponzu").style.display = "block";
                }else{
                    document.getElementById("ponzu").style.display = "none";
		
				}
	
	
//blue circle5//
fill(154, 196, 248);
ellipse(490, 535, 15);
	
//blue circle6//
fill(154, 196, 248);
ellipse(620, 210, 35);
	
	
   if( dist(mouseX, mouseY, 620, 210) < 35) {
                    document.getElementById("miso").style.display = "block";
                }else{
                    document.getElementById("miso").style.display = "none";
		
				}
	
	

//blue circle7//
fill(154, 196, 248);
ellipse(800, 250, 40);

   if( dist(mouseX, mouseY, 800, 250) < 40) {
                    document.getElementById("yuzu").style.display = "block";
                }else{
                    document.getElementById("yuzu").style.display = "none";
		
				}
	
	
	
	
//yellow circle1//     
noStroke ();  
fill(241, 154, 62);
ellipse(250,80, 15);
	
//yellow circle2//     
noStroke ();  
fill(241, 154, 62);
ellipse(200,420, 35);
	
   if( dist(mouseX, mouseY, 200, 420) < 35) {
                    document.getElementById("mayo").style.display = "block";
                }else{
                    document.getElementById("mayo").style.display = "none";
		
				}
	
//yellow circle3//
fill(241, 154, 62);
ellipse(350, 370, 7);

//yellow circle4//
fill(241, 154, 62);
ellipse(487, 250, 40);
	
   if( dist(mouseX, mouseY, 487, 250) < 40) {
                    document.getElementById("soya").style.display = "block";
                }else{
                    document.getElementById("soya").style.display = "none";
		
				}
	
	
//yellow circle5//     
noStroke ();  
fill(241, 154, 62);
ellipse(400,503, 12);
	
//yellow circle6//     
noStroke ();  
fill(241, 154, 62);
ellipse(670,543, 22);
	
	   if( dist(mouseX, mouseY, 670, 543) < 22) {
                    document.getElementById("may").style.display = "block";
                }else{
                    document.getElementById("may").style.display = "none";
		
				}
	
	
//yellow circle7//     
noStroke ();  
fill(241, 154, 62);
ellipse(600,120, 20);
	
	
		   if( dist(mouseX, mouseY, 600, 120) < 20) {
                    document.getElementById("july").style.display = "block";
                }else{
                    document.getElementById("july").style.display = "none";
		
				}	
	


//yellow circle8//     
noStroke ();  
fill(241, 154, 62);
ellipse(820,150, 25);
	

	   if( dist(mouseX, mouseY, 820, 150) < 25) {
                    document.getElementById("june").style.display = "block";
                }else{
                    document.getElementById("june").style.display = "none";
		
				}	
	
//yellow circle9//     
noStroke ();  
fill(241, 154, 62);
ellipse(885,500, 20);

	
	
		   if( dist(mouseX, mouseY, 885, 500) < 20) {
                    document.getElementById("aug").style.display = "block";
                }else{
                    document.getElementById("aug").style.display = "none";
		
				}	
	
	
	
//turquoise circle1//
noStroke ();  
fill(171, 231, 198);
ellipse(230, 260, 30);
	
   if( dist(mouseX, mouseY, 230, 260) < 30) {
                    document.getElementById("hoisin").style.display = "block";
                }else{
                    document.getElementById("hoisin").style.display = "none";
		
				}
	
//turquoisecircle2//
fill(171, 231, 198);
ellipse(450, 400, 50);
	
   if( dist(mouseX, mouseY, 450, 400) < 50) {
                    document.getElementById("mustard").style.display = "block";
                }else{
                    document.getElementById("mustard").style.display = "none";
		
				}

//turquoisecircle3//
fill(171, 231, 198);
ellipse(250, 40, 10);	
	
//turquoisecircle4//     
noStroke ();  
fill(171, 231, 198);
ellipse(500, 100, 20);
	
   if( dist(mouseX, mouseY, 500, 100) < 20) {
                    document.getElementById("ranch").style.display = "block";
                }else{
                    document.getElementById("ranch").style.display = "none";
		
				}
	
//turquoisecircle5//     
noStroke ();  
fill(171, 231, 198);
ellipse(537, 570, 20);
	
   if( dist(mouseX, mouseY, 537, 570) < 20) {
                    document.getElementById("sept").style.display = "block";
                }else{
                    document.getElementById("sept").style.display = "none";
		
				}
	

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
	
	
   if( dist(mouseX, mouseY, 832, 430) < 25) {
                    document.getElementById("oct").style.display = "block";
                }else{
                    document.getElementById("oct").style.display = "none";
		
				}
				

	

	

	



	
	
	
	









	
	
	

	

	

	

	

	

	

	

	


    
}

