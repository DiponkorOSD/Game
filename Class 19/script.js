let headingOne=document.querySelector(".headingOne")
let inputOne=document.querySelector(".inputOne")
let buttonOne=document.querySelector(".buttonOne")
let error=document.querySelector(".error")

let headingTwo=document.querySelector(".headingTwo")
let inputTwo=document.querySelector(".inputTwo")
let chance=document.querySelector(".chance")
let buttonTwo=document.querySelector(".buttonTwo")
let error2=document.querySelector(".error2")

let count=5

buttonOne.addEventListener("click",function(){
    if(!inputOne.value){
        error.innerHTML="Inter something";

    }else if(isNaN(inputOne.value)){
        error.innerHTML="Enter a number";

    }else if(!(inputOne.value<=10 && inputOne.value>0)){
        error.innerHTML="Enter a number 1 to 10";
    }else{
        headingTwo.style.display="block"
        inputTwo.style.display="block"
        buttonTwo.style.display="block"
        error2.style.display="block"
        chance.innerHTML=`chance : ${count}`
    }
        
})

buttonTwo.addEventListener("click",function(){
    if(!inputTwo.value){
        error2.innerHTML="Please Inter something";

    }else if(isNaN(inputTwo.value)){
        error2.innerHTML="Please Enter a number";

    }else if(!(inputTwo.value<=10 && inputTwo.value>0)){
        error2.innerHTML="Enter a number 1 to 10";
    }else{
        error2.innerHTML="";
        

        if(count>1){
            count--
            chance.innerHTML=`chnce : ${count}`
            if(inputOne.value==inputTwo.value){
                headingTwo.innerHTML="Player Two is winner";
                buttonTwo.style.display="none"
                inputTwo.value=""
            }
        }else{
            count=0
            chance.innerHTML=`chance : ${count}`
            headingTwo.innerHTML="Player Two louser";
            buttonTwo.style.display="none";
            inputTwo.value=""
        }
    }
})