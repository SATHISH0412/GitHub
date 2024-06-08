document.getElementById('mob-nav').addEventListener('click', function() {
    var dropdown = document.querySelector('.dropdown');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'flex';
    } else {
        dropdown.style.display = 'none';
    }
});

const sliders= document.querySelectorAll(".slider-img");
console.log(sliders)

let slideindex = 0;
let intervalid =null;

document.addEventListener("DOMContentLoaded",intilizeslider);

function intilizeslider(){
    if(sliders.length > 0){
        sliders[slideindex].classList.add("displayslide");
    intervalid = setInterval(nextslide,5000)
    }
}

function showslide(index)
{
    if(index >= sliders.length){
        slideindex=0;

    }
    else if(index < 0){
        slideindex=sliders.length-1;

    }
    sliders.forEach(slide =>{
        slide.classList.remove('displayslide');
    })

    sliders[slideindex].classList.add("displayslide");

}

function nextslide(){
    slideindex++;
    showslide(slideindex);

}

function prevslide(){
    slideindex--;
    showslide(slideindex);
 
    
}