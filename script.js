// Math.floor(Math.random() * 6) + 1
function dice(){
    var dice=Math.floor(Math.random() * 6) + 1;
    console.log(dice)
    var roll=document.getElementById("img");
    

    if(dice==1){
        img.src="./assest/1.png"; 
    }
    else if(dice==2){
        img.src="./assest/2.png";   
    }
    else if(dice==3){
        img.src="./assest/3.png";   
    }
    else if(dice==4){
        img.src="./assest/4.png";   
    }
    else if(dice==5){
        img.src="./assest/5.png";   
    }
    else if(dice==6){
        img.src="./assest/6.png";   
    }
    

    


}






