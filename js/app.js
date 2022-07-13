// scroll to top start 
const toTop = document.querySelector(".to-top");
window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 100){
        //if pageY offset > 100px
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})
// scroll to top end 