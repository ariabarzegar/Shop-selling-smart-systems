let $ = document;
let BoxMobile = $.querySelector(".box-mobile")
let ulMenu = $.querySelector(".ul-mobile")

BoxMobile.addEventListener("click",()=>{
    ulMenu.classList.toggle("show-ul-mobile")
    BoxMobile.classList.toggle("open-box-mobile")
})