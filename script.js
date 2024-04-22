//navbar taggle logic start
let menuBtn = document.querySelector("#menu-btn");
let menuItems = document.querySelector(".mo-nav");
let hamburger  = document.querySelector(".hamburger");
let closee = document.querySelector(".close");

menuBtn.addEventListener("click", ()=>{
    if(menuItems.style.display == "block"){
    menuItems.style.display = "none";
    hamburger.style.display = "block";
    closee.style.display = "none";
    }
    else{
        menuItems.style.display = "block";
        hamburger.style.display = "none";
        closee.style.display = "block";
    }
})

//navbar toggle logic enb



