const imageContainerEl= document.querySelector(".imageContainer")

const prevEl= document.getElementById("prev");

const nextEl= document.getElementById("next");

let x= 0;
let timer;

function updateGalary(){
    imageContainerEl.style.transform=`perspective(1000px) rotateY(${x}deg)`;
    timer= setTimeout(()=>{
        x-=45
        updateGalary()
    },3000)
}

prevEl.addEventListener("click",()=>{
    x+=45
    clearTimeout(timer)
    updateGalary()
})
nextEl.addEventListener("click",()=>{
    x-=45
    clearTimeout(timer)
    updateGalary()
})