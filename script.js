const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Coding.", "Developing.", "Problem Solving.","Lan Gaming."];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

const sections = document.querySelectorAll('section')
const nav_a = document.querySelectorAll('.navbarNav ul li a')

const getPage = (a) =>{
  let userRoles = new Map([
    [ 'page1_0','Main'],
    [ 'page2_0','bio'],
    [ 'page3_0','resume'],
    ['page4_0','projects'],
    ['page5_0','contact'],
  ]);
  return userRoles.get(a);
}



// <section class="contact pb-5" id="page5_0" >
//   <div class="container">
//     <div class="row d-flex justify-content-center text-center heading">
//        <h2>Contact</h2>
//     </div>
//   </div>
//   <div class="row mt-3">
//     <div class="col col-xs-12 text-center"  >
//       <div class="card text-center  mb-3" style="width: 97%; height: 100%;width: 100%;">
//         <img class="card-img-top align-self-center" src="./images/skills/phone.png" alt="Card image cap" style="width: 100px; height:100px;">
//         <div class="card-body">
//           <p class="card-text">(+91) 9381048732</p>
//         </div>
//       </div>
//     </div>
//     <div class="col col-xs-12"  >
//       <div class="card text-center  mb-3" style="width: 97%; height: 100%;width: 100%;">
//         <img class="card-img-top align-self-center" src="./images/skills/email.png" alt="Card image cap" style="width: 100px; height:100px;">
//         <div class="card-body">
//           <p class="card-text">shaiks820@gmail.com</p>
//         </div>
//       </div>
//     </div>
//     <div class="col col-xs-12"  >
//       <div class="card text-center  mb-3" style="width: 97%; height: 100%;width: 100%;">
//         <img class="card-img-top align-self-center" src="./images/skills/earth.png" alt="Card image cap" style="width: 100px; height:100px;">
//         <div class="card-body">
//           <p class="card-text">Website link</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>


window.addEventListener('scroll',()=>{
  let current='';
  let sub ='';
  sections.forEach(section=>{
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset + 100 > sectionTop){
      current= section.getAttribute('id');
    }
  })
  //console.log(current);
  const cur_active = document.querySelectorAll('.nav-link');
  cur_active.forEach(ele=>{
    if(ele.classList.contains('active'))
      ele.classList.remove('active');
  })
  const new_active = document.getElementById(getPage(current));
  subs = document.querySelectorAll(current);

  console.log(sub);
  if(new_active)
    new_active.classList.add('active');

}
);