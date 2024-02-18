const btn1 =document.querySelector("#A1");
btn1.addEventListener('click',()=>{
    btn1.style.backgroundColor='#4ADE80';
})
const btn2 =document.querySelector("#A2");
btn2.addEventListener('click',()=>{
    btn2.style.backgroundColor='#4ADE80';
})
const btn3 =document.querySelector("#A3");
btn3.addEventListener('click',()=>{
    btn3.style.backgroundColor='#4ADE80';
})
const btn4 =document.querySelector("#A4");
btn4.addEventListener('click',()=>{
    btn4.style.backgroundColor='#4ADE80';
})
// b2
const btn5 =document.querySelector("#B1");
btn5.addEventListener('click',()=>{
    btn5.style.backgroundColor='#4ADE80';
})
const btn6 =document.querySelector("#B2");
btn6.addEventListener('click',()=>{
    btn6.style.backgroundColor='#4ADE80';
})
const btn7 =document.querySelector("#B3");
btn7.addEventListener('click',()=>{
    btn7.style.backgroundColor='#4ADE80';
})
const btn8 =document.querySelector("#B4");
btn8.addEventListener('click',()=>{
    btn8.style.backgroundColor='#4ADE80';
})

const allBtn=document.getElementsByClassName('Add');
let count = 8;
for (const add of allBtn){
    add.addEventListener('click',function (e){
        if(count === 0){ 
            alert('no seat')
            return;
        }
        count = count - 1;
        document.getElementById('seat').innerText = count;
        // const seatName=e.target.childNodes[1].innerText
        // console.log(seatName)
        // // document.getElementById('Anik').innerText = seatName;



        // setInnerText("cart-count",count)

    })
}
const allBtn2=document.getElementsByClassName('Add');
let count2 = 0;
for (const add of allBtn2){
    add.addEventListener('click',function (e){
        if(count2 === 8){ 
            alert('no seat')
            return;}
        count2 = count2 + 1;
        document.getElementById('seat2').innerText = count2;

    })
}

// add append

// function setInnerText(){
//     document.getElementById(id).innerText = value;
// }

function A1(){
    const a1Seat = document.getElementById('a1')
    a1Seat.classList.remove('hidden')
}
function A2(){
    const a2Seat = document.getElementById('a2')
    a2Seat.classList.remove('hidden')
}
function A3(){
    const a3Seat = document.getElementById('a3')
    a3Seat.classList.remove('hidden')
}
function A4(){
    const a4Seat = document.getElementById('a4')
    a4Seat.classList.remove('hidden')
}
function A5(){
    const a5Seat = document.getElementById('a5')
    a5Seat.classList.remove('hidden')
}
function A6(){
    const a6Seat = document.getElementById('a6')
    a6Seat.classList.remove('hidden')
}
function A7(){
    const a7Seat = document.getElementById('a7')
    a7Seat.classList.remove('hidden')
}
function A8(){
    const a2Seat = document.getElementById('a2')
    a2Seat.classList.remove('hidden')
}
