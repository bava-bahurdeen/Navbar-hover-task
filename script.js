let devlop=document.getElementById("develop");
let design=document.getElementById("design");
let hire=document.getElementById("hire");
let page1=document.querySelector(".page1-parent")
let page2=document.querySelector(".page2-parent")
let page3=document.querySelector(".page3-parent");

let nav=document.querySelector("page1__side-nav");
let wed=document.getElementById("p1-box1");
let ecommerce=document.getElementById("p1-box2")
let landing=document.getElementById("p1-box3")
let blog=document.getElementById("p1-box4")
let email=document.getElementById("p1-box5")
let theme=document.getElementById("p1-box6")

let box1=document.getElementById("p1-content-box1");
let box2=document.getElementById("p1-content-box2")
let box3=document.getElementById("p1-content-box3")
let box4=document.getElementById("p1-content-box4")
let box5=document.getElementById("p1-content-box5")
let box6=document.getElementById("p1-content-box6")

window.addEventListener("load",()=>{
    page1.style.display="none"
    page2.style.display="none"
    page3.style.display="none"
})

devlop.addEventListener("mouseover",()=>{
 page1.style.display="block"
 page2.style.display="none"
 page3.style.display="none"
 box2.style.display="none"
 box3.style.display="none"
 box4.style.display="none"
 box5.style.display="none"
 box6.style.display="none"
})

design.addEventListener("mouseover",()=>{
  page1.style.display="none"
    page2.style.display="block"
    page3.style.display="none" 
})
hire.addEventListener("mouseover",()=>{
    page3.style.display="block"
    page1.style.display="none"
    page2.style.display="none"

})

wed.addEventListener("mouseover",()=>{
    box1.style.display="block"
  box2.style.display="none"
  box3.style.display="none"
  box4.style.display="none"
  box5.style.display="none"
  box6.style.display="none"

})
ecommerce.addEventListener("mouseover",()=>{
    box1.style.display="none"
    box2.style.display="block"
    box3.style.display="none"
    box4.style.display="none"
    box5.style.display="none"
    box6.style.display="none"
  
  })

landing.addEventListener("mouseover",()=>{
    box1.style.display="none"
    box2.style.display="none"
    box3.style.display="block"
    box4.style.display="none"
    box5.style.display="none"
    box6.style.display="none"
})

blog.addEventListener("mouseover",()=>{

    box1.style.display="none"
    box2.style.display="none"
    box3.style.display="none"
    box4.style.display="block"
    box5.style.display="none"
    box6.style.display="none"
})


email.addEventListener("mouseover",()=>{

    box1.style.display="none"
    box2.style.display="none"
    box3.style.display="none"
    box4.style.display="none"
    box5.style.display="block"
    box6.style.display="none"
})


theme.addEventListener("mouseover",()=>{

    box1.style.display="none"
    box2.style.display="none"
    box3.style.display="none"
    box4.style.display="none"
    box5.style.display="none"
    box6.style.display="block"

})

box2.addEventListener("mouseover",()=>{
    box1.style.display="none"
    box2.style.display="block"
    box3.style.display="none"
    box4.style.display="none"
    box5.style.display="none"
    box6.style.display="none"
})

box3.addEventListener("mouseover",()=>{
    box1.style.display="none"
    box2.style.display="none"
    box3.style.display="block"
    box4.style.display="none"
    box5.style.display="none"
    box6.style.display="none"
})
box4.addEventListener("mouseover",()=>{
    box1.style.display="none"
    box2.style.display="none"
    box3.style.display="none"
    box4.style.display="block"
    box5.style.display="none"
    box6.style.display="none"
})
box5.addEventListener("mouseover",()=>{
    box1.style.display="none"
    box2.style.display="none"
    box3.style.display="none"
    box4.style.display="none"
    box5.style.display="block"
    box6.style.display="none"
})

box6.addEventListener("mouseover",()=>{
    box1.style.display="none"
    box2.style.display="none"
    box3.style.display="none"
    box4.style.display="none"
    box5.style.display="none"
    box6.style.display="block"
})

