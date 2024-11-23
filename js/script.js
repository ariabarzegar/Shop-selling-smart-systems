let $ = document;
let BoxMobile = $.querySelector(".box-mobile")
let ulMenu = $.querySelector(".ul-mobile")
let CustomersBottom = $.querySelectorAll(".Customers-bottom__box")
let jahatRight = $.getElementById("jahat-right") 
let jahatLeft  = $.getElementById("jahat-left")
let flag = 1

BoxMobile.addEventListener("click",()=>{
    ulMenu.classList.toggle("show-ul-mobile")
    BoxMobile.classList.toggle("open-box-mobile")
})

jahatRight.addEventListener("click",()=>{
    flag++
    if (flag>3) {
        flag=1
    }
    let boxCustomers = $.querySelector(`.box${flag}`)
    console.log(flag);
    console.log(boxCustomers);
    reset()
    boxCustomers.classList.add("show")
})

jahatLeft.addEventListener("click",()=>{
    flag--
    if (flag<=0) {
        flag=3
    }
    let boxCustomers = $.querySelector(`.box${flag}`)
    console.log(flag);
    console.log(boxCustomers);
    reset()
    boxCustomers.classList.add("show")
})

let reset = ()=>{
    CustomersBottom.forEach((element)=>{
        element.classList.remove("show")
    })
}