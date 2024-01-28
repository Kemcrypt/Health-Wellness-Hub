let menu = document.querySelector(".menu");
let mynav = document.querySelector(".navbar");

menu.addEventListener("click", function(){
  console.log(mynav.classList.toggle("show"));
  //onsole.log("hi");
})