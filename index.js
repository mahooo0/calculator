const firstInpEl=document.getElementById("input1")
const secondInpEl=document.getElementById("input2")

const section1El=document.querySelector("#calculation")
const section2El=document.querySelector("#ansevar")

const button1=document.getElementById("button1")
const button2=document.getElementById("button2")
const button3=document.getElementById("button3")
const button4=document.getElementById("button4")
const button5=document.getElementById("button5")



button1.addEventListener("click",function(){
    section1El.innerHTML="+"
    let firstInpValue=firstInpEl.value
    let secondInpValue=secondInpEl.value
    let el1=parseInt(firstInpValue)
    let el2=parseInt(secondInpValue)
    let ansever=el1+el2
    section2El.innerHTML=ansever
})
button2.addEventListener("click",function(){
    section1El.innerHTML="-"
    let firstInpValue=firstInpEl.value
    let secondInpValue=secondInpEl.value
    let el1=parseInt(firstInpValue)
    let el2=parseInt(secondInpValue)
    let ansever=el1-el2
    section2El.innerHTML=ansever
})
button3.addEventListener("click",function(){
    section1El.innerHTML="/"
    let firstInpValue=firstInpEl.value
    let secondInpValue=secondInpEl.value
    let el1=parseInt(firstInpValue)
    let el2=parseInt(secondInpValue)
    let ansever=el1/el2
    section2El.innerHTML=ansever
})
button4.addEventListener("click",function(){
    section1El.innerHTML="*"
    let firstInpValue=firstInpEl.value
    let secondInpValue=secondInpEl.value
    let el1=parseInt(firstInpValue)
    let el2=parseInt(secondInpValue)
    let ansever=el1*el2
    section2El.innerHTML=ansever
})
button5.addEventListener("click",function () {
    firstInpEl.value=""
    secondInpEl.value=""
    section1El.innerHTML=""
    section2El.innerHTML=""
})

