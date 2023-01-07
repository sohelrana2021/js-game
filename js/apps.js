
let pla1 = document.querySelector(".pla1")
let input1 = document.querySelector(".input1")
let btn1 = document.querySelector(".btn1")
let erro1 = document.querySelector(".erro1")
let input2 = document.querySelector(".input2")
let btn2 = document.querySelector(".btn2")
let err02 = document.querySelector(".err02")
let countter = document.querySelector(".chance")
let count = document.querySelector(".count")
let chance = 5 

btn1.addEventListener("click", function(){
    if(!input1.value){
        erro1.innerHTML = "Please your value"
        erro1.style.color = "red"
    }else if((input1.value - 12 == 0  ? false: !(input1.value - 12))){
        erro1.innerHTML = "Please your Namber"
        erro1.style.color = "red"
    }else if(input1.value - 12){
        if(!(input1.value >= 1 && input1.value <= 10)){
            erro1.innerHTML = "Please your ( 1 - 10 ) Namber"
            erro1.style.color = "red"
        }else{

            erro1.innerHTML =" "
            input1.style.display = "none"
            input2.style.display = "inline-block"
            btn1.style.display = "none"
            btn2.style.display = "inline-block"
            pla1.innerHTML = "Player 2"
            countter.style.display = "block"
        }
    }

})

btn2.addEventListener("click",function(){
    if(chance > 0){
        chance--
        count.innerHTML = chance;
    }else{
        pla1.innerHTML = "Player 1 Winner"
        btn2.style.display = "none"
        input2.style.display = "none"
    }

    if(!(input1.value == input2.value)){
        err02.innerHTML = "Not Match"
        err02.style.color = "red"
    }else{
        pla1.innerHTML = "Player 2 Winner"
        pla1.style.color = "green"
        err02.innerHTML = ""
        btn2.style.display = "none"
        input2.style.display = "none"
    }
})

