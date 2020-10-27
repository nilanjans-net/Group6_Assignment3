var imageCount = 1;
var total = 3;
var time = window.setInterval(autoRotate, 6000);

function rotateOnce(x) {
	var image = document.getElementById('image');
	imageCount = imageCount + x;
	if(imageCount > total){
            imageCount = 1;
        }
	if(imageCount < 1){
            imageCount = total;
        }	
	image.src = "./Images/Banner/"+ imageCount +".jpg";
	clearInterval(time); 								
	time =  window.setInterval(autoRotate,6000);
}

function autoRotate() {       
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total){
            imageCount = 1;
        }
	if(imageCount < 1){
            imageCount = total;
        }	
        if (image !== null) {
            image.src = "./Images/Banner/" + imageCount +".jpg";           
        }
        
}



