window.onload = function(){
    const container = document.querySelector(".container");
    next.addEventListener("click",()=>{
        let cads = document.querySelectorAll(".card");
        container.appendChild(cads[0]);
    })
    prev.addEventListener("click",()=>{
        let cads = document.querySelectorAll(".card");
        container.prepend(cads[cads.length-1]);
    })
}