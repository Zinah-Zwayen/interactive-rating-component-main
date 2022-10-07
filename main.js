const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thanks-container");

const submitbtn = document.getElementById("submit");

const ratingbtn = document.querySelectorAll(".btn")
const addrating = document.getElementById("rating")

submitbtn.addEventListener("click", ()=>{
    thanksContainer.style.setProperty("visibility", "visible");
    mainContainer.style.setProperty("visibility", "hidden");
    
})

ratingbtn.forEach((rate)=>{
    rate.addEventListener("click", ()=>{
        addrating.innerHTML = rate.innerHTML
    })
})
  