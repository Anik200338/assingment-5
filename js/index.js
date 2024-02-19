const allBtn2=document.getElementsByClassName('Add');
let count2 = 0;
for (const add of allBtn2){
    add.addEventListener('click',function (e){
        if(count2 === 4){ 
            return;}
        count2 = count2 + 1;
        document.getElementById('seat2').innerText = count2;

    })
}
const btn1 =document.querySelector("#A1");
btn1.addEventListener('click',()=>{
    if(count2 === 4){
        return;
    }
    btn1.style.backgroundColor='#4ADE80';
})
const btn2 =document.querySelector("#A2");
btn2.addEventListener('click',()=>{
    if(count2 === 4){
        return;
    }
    btn2.style.backgroundColor='#4ADE80';
})
const btn3 =document.querySelector("#A3");
btn3.addEventListener('click',()=>{
    if(count2 === 4){
        return;
    }
    btn3.style.backgroundColor='#4ADE80';
})
const btn4 =document.querySelector("#A4");
btn4.addEventListener('click',()=>{
    if(count2 === 4){
        return;
    }
    btn4.style.backgroundColor='#4ADE80';
})
// b2
const btn5 =document.querySelector("#B1");
btn5.addEventListener('click',()=>{
    if(count2 === 4){
        return;
    }
    btn5.style.backgroundColor='#4ADE80';
})
const btn6 =document.querySelector("#B2");
btn6.addEventListener('click',()=>{
    if(count2 === 4){
        return;
    }
    btn6.style.backgroundColor='#4ADE80';
})
const btn7 =document.querySelector("#B3");
btn7.addEventListener('click',()=>{
    if(count2 === 4){
        return;
    }
    btn7.style.backgroundColor='#4ADE80';
})
const btn8 =document.querySelector("#B4");
btn8.addEventListener('click',()=>{
    if(count2 === 4){
        return;
    }
    btn8.style.backgroundColor='#4ADE80';
})

const allBtn=document.getElementsByClassName('Add');
let count = 8;
for (const add of allBtn){
    add.addEventListener('click',function (e){
        if(count === 0 || count === 4){ 
            return;
        }
        count = count - 1;
        document.getElementById('seat').innerText = count;
    })
}

// add append

function A1(){
    const a1Seat = document.getElementById('a1')
    a1Seat.classList.remove('hidden');
    const b1Seat = document.getElementById('b1').innerText
    const convertedTotalCost11 = parseInt(b1Seat);
    const totalCost = document.getElementById("total").innerText;
    const convertedTotalCost2 = parseInt(totalCost) + convertedTotalCost11;
    if(convertedTotalCost2 >= 2300){
        alert('no seat')
            return a1Seat.classList.add('hidden');}
    document.getElementById("total").innerText = convertedTotalCost2;
    const grandTost = document.getElementById("grandTotal").innerText;
    const convertedGrandTotalCost2 = parseInt(grandTost) + convertedTotalCost11
    if(convertedGrandTotalCost2 >= 2300){
        alert('no seat')
            return a1Seat.classList.add('hidden');}
    document.getElementById("grandTotal").innerText = convertedGrandTotalCost2;
    
    
   
}
function A2(){
    const a2Seat = document.getElementById('a2')
    a2Seat.classList.remove('hidden');
    const b2Seat = document.getElementById('b2').innerText
    const convertedTotalCost11 = parseInt(b2Seat);
    const totalCost = document.getElementById("total").innerText;
    const convertedTotalCost2 = parseInt(totalCost) + convertedTotalCost11;
    if(convertedTotalCost2 >= 2300){
        alert('no seat')
        return a2Seat.classList.add('hidden');}
    document.getElementById("total").innerText = convertedTotalCost2;
    const grandTost = document.getElementById("grandTotal").innerText;
    const convertedGrandTotalCost2 = parseInt(grandTost) + convertedTotalCost11
    if(convertedGrandTotalCost2 >= 2300){
        alert('no seat')
        return a2Seat.classList.add('hidden');}
    document.getElementById("grandTotal").innerText = convertedGrandTotalCost2;

}
function A3(){
    const a3Seat = document.getElementById('a3')
    a3Seat.classList.remove('hidden')
    const b2Seat = document.getElementById('b3').innerText
    const convertedTotalCost11 = parseInt(b2Seat);
    const totalCost = document.getElementById("total").innerText;
    const convertedTotalCost2 = parseInt(totalCost) + convertedTotalCost11;
    if(convertedTotalCost2 >= 2300){
        alert('no seat')
        return a3Seat.classList.add('hidden');}
    document.getElementById("total").innerText = convertedTotalCost2;
    const grandTost = document.getElementById("grandTotal").innerText;
    const convertedGrandTotalCost2 = parseInt(grandTost) + convertedTotalCost11
    if(convertedGrandTotalCost2 >= 2300){
        alert('no seat')
        return a3Seat.classList.add('hidden');}
    document.getElementById("grandTotal").innerText = convertedGrandTotalCost2;
}
function A4(){
    const a4Seat = document.getElementById('a4')
    a4Seat.classList.remove('hidden')
    const b2Seat = document.getElementById('b4').innerText
    const convertedTotalCost11 = parseInt(b2Seat);
    const totalCost = document.getElementById("total").innerText;
    const convertedTotalCost2 = parseInt(totalCost) + convertedTotalCost11;
    if(convertedTotalCost2 >= 2300){
        alert('no seat')
        return a4Seat.classList.add('hidden');}
    document.getElementById("total").innerText = convertedTotalCost2;
    const grandTost = document.getElementById("grandTotal").innerText;
    const convertedGrandTotalCost2 = parseInt(grandTost) + convertedTotalCost11
    if(convertedGrandTotalCost2 >= 2300){
        alert('no seat')
        return a4Seat.classList.add('hidden');}
    document.getElementById("grandTotal").innerText = convertedGrandTotalCost2;
}
function A5(){
    const a5Seat = document.getElementById('a5')
    a5Seat.classList.remove('hidden')
    const b2Seat = document.getElementById('b5').innerText
    const convertedTotalCost11 = parseInt(b2Seat);
    const totalCost = document.getElementById("total").innerText;
    const convertedTotalCost2 = parseInt(totalCost) + convertedTotalCost11;
    if(convertedTotalCost2 >= 2300){
        alert('no seat')
        return a5Seat.classList.add('hidden');}
    document.getElementById("total").innerText = convertedTotalCost2;
    const grandTost = document.getElementById("grandTotal").innerText;
    const convertedGrandTotalCost2 = parseInt(grandTost) + convertedTotalCost11
    if(convertedGrandTotalCost2 >= 2300){
        alert('no seat')
        return a5Seat.classList.add('hidden');}
    document.getElementById("grandTotal").innerText = convertedGrandTotalCost2;
}
function A6(){
    const a6Seat = document.getElementById('a6')
    a6Seat.classList.remove('hidden')
    const b2Seat = document.getElementById('b6').innerText
    const convertedTotalCost11 = parseInt(b2Seat);
    const totalCost = document.getElementById("total").innerText;
    const convertedTotalCost2 = parseInt(totalCost) + convertedTotalCost11;
    if(convertedTotalCost2 >= 2300){
        alert('no seat')
        return a6Seat.classList.add('hidden');}
    document.getElementById("total").innerText = convertedTotalCost2;
    const grandTost = document.getElementById("grandTotal").innerText;
    const convertedGrandTotalCost2 = parseInt(grandTost) + convertedTotalCost11
    if(convertedGrandTotalCost2 >= 2300){
        alert('no seat')
        return a6Seat.classList.add('hidden');}
    document.getElementById("grandTotal").innerText = convertedGrandTotalCost2;
}
function A7(){
    const a7Seat = document.getElementById('a7')
    a7Seat.classList.remove('hidden')
    const b2Seat = document.getElementById('b7').innerText
    const convertedTotalCost11 = parseInt(b2Seat);
    const totalCost = document.getElementById("total").innerText;
    const convertedTotalCost2 = parseInt(totalCost) + convertedTotalCost11;
    if(convertedTotalCost2 >= 2300){
        alert('no seat')
        return a7Seat.classList.add('hidden');}
    document.getElementById("total").innerText = convertedTotalCost2;
    const grandTost = document.getElementById("grandTotal").innerText;
    const convertedGrandTotalCost2 = parseInt(grandTost) + convertedTotalCost11
    if(convertedGrandTotalCost2 >= 2300){
        alert('no seat')
        return a7Seat.classList.add('hidden');}
    document.getElementById("grandTotal").innerText = convertedGrandTotalCost2;
}
const grandTost = document.getElementById("grandTotal").innerText;
function A8(){
    const a2Seat = document.getElementById('a8')
    a2Seat.classList.remove('hidden')
    const b2Seat = document.getElementById('b8').innerText
    const convertedTotalCost11 = parseInt(b2Seat);
    const totalCost = document.getElementById("total").innerText;
    const convertedTotalCost2 = parseInt(totalCost) + convertedTotalCost11;
    if(convertedTotalCost2 >= 2300){
        alert('no seat')
        return a2Seat.classList.add('hidden');}
    document.getElementById("total").innerText = convertedTotalCost2;
    const convertedGrandTotalCost2 = parseInt(grandTost) + convertedTotalCost11
    if(convertedGrandTotalCost2 >= 2300){
        alert('no seat')
        return a2Seat.classList.add('hidden');}
    document.getElementById("grandTotal").innerText = convertedGrandTotalCost2;
    
}
// total
// const button = document.getElementById('anik')
// const text = document.getElementById('userName')
// const name =document.getElementById ('name')
// function showName(inputName){
//     name.innerText = inputName;
// }
// button.addEventListener('click', ()=>{
//     showName(text.value)
// })

function handleKeyBoardKeyEvent(event){
    const playerPressed = event.key;
    
    if(playerPressed === "1"){
        console.log(playerPressed)
    }

}

 document.addEventListener('keyup',handleKeyBoardKeyEvent);


