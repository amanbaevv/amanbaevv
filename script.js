// setTimeout-план

// setTimeout-бир жолу чыгарат 

// setInterval-бесконечно чыкырат

// setTimeout(() => {
//  alert("hello")   
// }, 3000);

// setInterval(() => {
//     alert("hello")
// }, 3000);
  

// setTimeout(() => {
//     alert("hello")
// }, 3000);

// setTimeout(() => {
//     alert("umar")
// }, 4000);

let a = document.getElementById("a")
let s = document.getElementById("s")


let uua =  () => {
a.style.color="red"
a.style.transform="rotate(360deg)"
a.style.transition="3s"
document.body.style.backgroundColor="green"
a.body.style.transition="2s"
}


let uus =  () => {
s.style.color="red"
s.style.transform="rotate(360deg)"
s.style.transition="3s"
document.body.style.backgroundColor="black"
s.body.style.transition="2s"
}


setTimeout(() => {
    uua()
}, 3000);


setTimeout(() => {
    uus()
}, 6000);