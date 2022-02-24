
var imagecount =0;
let mylist=[];
var content="";
var rand = [];

function addarray(mylist)
{


    for (let index = 0; index < 2; index++) {
        
        var sub=[];
        
        for (let i = 0; i < 4; i++) {
            
            imagecount++;
            
            sub.push("images/"+imagecount+".jpg");
            
        }

        mylist.push(sub);

         console.log( mylist);
    
    }

   
}


function getNonRepeatingRndIntegers (min, max) {
    for (let i = 0; i <= (max - min); i++) {
        rand[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    for (let i = 0; i <= (max - min); i++) {
        for (let j = 0; j <= (max - min); j++) {
            if (i != j) {
                if (rand[i] === rand[j]) {
                    rand[j] = max + 1;
                }
            }
        }
    }

    for (let i = 0; i <= (max - min); i++) {
        if (rand[i] === (max + 1)) {
            rand[i]--;
    
            for (let k = 0; k <= (max - min); k++) {
                if (k != i) {
                    if (rand[i] === rand[k]) {
                        rand[i]--;
                        k = -1;
                    }
                }
            }
        }
    }
    
}





function createimageslider(){
    
    try {
        
        
        var divflip=document.getElementById("slider__cards");
        
        for (let index = 0; index < 8; index++) {
            
            content+="<div id='slider__card'"+ index  + "' title='image: "+index+"'>";
            
            for (let j = 0; j < 1; j++) {
                

                if(index==0){

                    content+="<img id='slider__img' src='/" + mylist[parseInt(0)][parseInt(rand[0])]  +"\' />";
                    content+="</div>";
                }
                

                if(index==1){

                    content+="<img id='slider__img' src='/" + mylist[parseInt(0)][parseInt(rand[1])]  +"\' />";
                    content+="</div>";
                }

                if(index==2){

                    content+="<img id='slider__img' src='/" + mylist[parseInt(0)][parseInt(rand[2])]  +"\' />";
                    content+="</div>";
                }

                if(index==3){

                    content+="<img id='slider__img' src='/" + mylist[parseInt(0)][parseInt(rand[3])]  +"\' />";
                    content+="</div>";
                }

                if(index==4){

                    content+="<img id='slider__img' src='/" + mylist[parseInt(1)][parseInt(rand[0])]  +"\' />";
                    content+="</div>";
                }

                if(index==5){

                    content+="<img id='slider__img' src='/" + mylist[parseInt(1)][parseInt(rand[1])]  +"\' />";
                    content+="</div>";
                }

                if(index==6){

                    content+="<img id='slider__img' src='/" + mylist[parseInt(1)][parseInt(rand[2])]  +"\' />";
                    content+="</div>";
                }

                if(index==7){

                    content+="<img id='slider__img' src='/" + mylist[parseInt(1)][parseInt(rand[3])]  +"\' />";
                    content+="</div>";
                }
                
                content+="</div>";
            }


            


            content+="</div>";

        }
        

        
        
        
        content+="</div>";
        
        
        divflip.innerHTML=content;
        
               


        console.log(document.getElementById("slider__cards"));

    } catch (error) {
        

    }


}



function button(){
    
    
    
    
    const next = document.querySelector(".slider__btnnext");
    const back = document.querySelector(".slider__btnback"),
    slider = document.querySelector("#slider__cards");
    let angle = 0;
    var k=0;
    
    

    next.addEventListener("click", () => {
        angle -= 45;
        slider.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
        
      var image = document.querySelectorAll('#slider__img');
      

     
            
      image[0].style.animation="none";


      if(k==0)
      {
          
          image[0].style.animation="none";

          image[1].style.animation="image_blur 2s infinite";
          image[2].style.animation="image_blur 2s infinite";
          image[3].style.animation="image_blur 2s infinite";
          image[4].style.animation="image_blur 2s infinite";
          image[5].style.animation="image_blur 2s infinite";
          image[6].style.animation="image_blur 2s infinite";
          image[7].style.animation="image_blur 2s infinite";
      }
      
      if(k==1)
      {
          
          image[1].style.animation="none";

          image[0].style.animation="image_blur 2s infinite";
          image[2].style.animation="image_blur 2s infinite";
          image[3].style.animation="image_blur 2s infinite";
          image[4].style.animation="image_blur 2s infinite";
          image[5].style.animation="image_blur 2s infinite";
          image[6].style.animation="image_blur 2s infinite";
          image[7].style.animation="image_blur 2s infinite";
      }

            
      if(k==2)
      {
          
          image[2].style.animation="none";

          image[1].style.animation="image_blur 2s infinite";
          image[0].style.animation="image_blur 2s infinite";
          image[3].style.animation="image_blur 2s infinite";
          image[4].style.animation="image_blur 2s infinite";
          image[5].style.animation="image_blur 2s infinite";
          image[6].style.animation="image_blur 2s infinite";
          image[7].style.animation="image_blur 2s infinite";
      }

            
      if(k==3)
      {
          
          image[3].style.animation="none";

          image[1].style.animation="image_blur 2s infinite";
          image[2].style.animation="image_blur 2s infinite";
          image[0].style.animation="image_blur 2s infinite";
          image[4].style.animation="image_blur 2s infinite";
          image[5].style.animation="image_blur 2s infinite";
          image[6].style.animation="image_blur 2s infinite";
          image[7].style.animation="image_blur 2s infinite";
      }
      
                    
      if(k==4)
      {
          
          image[4].style.animation="none";

          image[1].style.animation="image_blur 2s infinite";
          image[2].style.animation="image_blur 2s infinite";
          image[3].style.animation="image_blur 2s infinite";
          image[0].style.animation="image_blur 2s infinite";
          image[5].style.animation="image_blur 2s infinite";
          image[6].style.animation="image_blur 2s infinite";
          image[7].style.animation="image_blur 2s infinite";
      }
                    
      if(k==5)
      {
          
          image[5].style.animation="none";

          image[1].style.animation="image_blur 2s infinite";
          image[2].style.animation="image_blur 2s infinite";
          image[3].style.animation="image_blur 2s infinite";
          image[4].style.animation="image_blur 2s infinite";
          image[0].style.animation="image_blur 2s infinite";
          image[6].style.animation="image_blur 2s infinite";
          image[7].style.animation="image_blur 2s infinite";
      }
                    
      if(k==6)
      {
          
          image[6].style.animation="none";

          image[1].style.animation="image_blur 2s infinite";
          image[2].style.animation="image_blur 2s infinite";
          image[3].style.animation="image_blur 2s infinite";
          image[4].style.animation="image_blur 2s infinite";
          image[5].style.animation="image_blur 2s infinite";
          image[0].style.animation="image_blur 2s infinite";
          image[7].style.animation="image_blur 2s infinite";
      }
                    
      if(k==7)
      {
          
          image[7].style.animation="none";

          image[1].style.animation="image_blur 2s infinite";
          image[2].style.animation="image_blur 2s infinite";
          image[3].style.animation="image_blur 2s infinite";
          image[4].style.animation="image_blur 2s infinite";
          image[5].style.animation="image_blur 2s infinite";
          image[6].style.animation="image_blur 2s infinite";
          image[0].style.animation="image_blur 2s infinite";
      }

      
    });
    
    back.addEventListener("click", () => {
        angle += 45;
        slider.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
        
        
        
        var image = document.querySelectorAll('#slider__img');
        


        if(k==0)
        {
            
            image[0].style.animation="image_blur 2s infinite";
  
            image[1].style.animation="none";
            image[2].style.animation="none";
            image[3].style.animation="none";
            image[4].style.animation="none";
            image[5].style.animation="none";
            image[6].style.animation="none";
            image[7].style.animation="none";
        }
    
        if(k==1)
        {
            
            image[1].style.animation="image_blur 2s infinite";
  
            image[0].style.animation="none";
            image[2].style.animation="none";
            image[3].style.animation="none";
            image[4].style.animation="none";
            image[5].style.animation="none";
            image[6].style.animation="none";
            image[7].style.animation="none";
        }
  
        if(k==2)
        {
            
            image[2].style.animation="image_blur 2s infinite";
  
            image[1].style.animation="none";
            image[0].style.animation="none";
            image[3].style.animation="none";
            image[4].style.animation="none";
            image[5].style.animation="none";
            image[6].style.animation="none";
            image[7].style.animation="none";
        }
  
        if(k==3)
        {
            
            image[3].style.animation="image_blur 2s infinite";
  
            image[1].style.animation="none";
            image[2].style.animation="none";
            image[0].style.animation="none";
            image[4].style.animation="none";
            image[5].style.animation="none";
            image[6].style.animation="none";
            image[7].style.animation="none";
        }
  
        if(k==4)
        {
            
            image[4].style.animation="image_blur 2s infinite";
  
            image[1].style.animation="none";
            image[2].style.animation="none";
            image[3].style.animation="none";
            image[0].style.animation="none";
            image[5].style.animation="none";
            image[6].style.animation="none";
            image[7].style.animation="none";
        }
  
        if(k==5)
        {
            
            image[5].style.animation="image_blur 2s infinite";
  
            image[1].style.animation="none";
            image[2].style.animation="none";
            image[3].style.animation="none";
            image[4].style.animation="none";
            image[0].style.animation="none";
            image[6].style.animation="none";
            image[7].style.animation="none";
        }
  
        if(k==6)
        {
            
            image[6].style.animation="image_blur 2s infinite";
  
            image[1].style.animation="none";
            image[2].style.animation="none";
            image[3].style.animation="none";
            image[4].style.animation="none";
            image[5].style.animation="none";
            image[0].style.animation="none";
            image[7].style.animation="none";
        }
  
        if(k==7)
        {
            
            image[7].style.animation="image_blur 2s infinite";
  
            image[1].style.animation="none";
            image[2].style.animation="none";
            image[3].style.animation="none";
            image[4].style.animation="none";
            image[5].style.animation="none";
            image[6].style.animation="none";
            image[0].style.animation="none";
        }
      
        

    });

 }






window.onload=function main(){
    
    
    alert("This project work with host (ex: localhost)");

    getNonRepeatingRndIntegers(0,3);
    
    console.log(rand[0], rand[1], rand[2], rand[3], rand[4], rand[5], rand[6],  rand[7]);
    
    addarray(mylist);
    
    createimageslider();
    
    button();
    




}


