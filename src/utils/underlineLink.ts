import { gsap } from "gsap";


const logo = document.querySelector("#logo");
const menuButton = document.querySelector(".menuButton");
const ball = document.querySelector("#ball");

function getPositionAndDimensions(element: any) {
  // Obtenir le rectangle de la div
  const rect = element.getBoundingClientRect();


  // Récupérer la position (coordonnées X et Y) du point en bas à droite
  const bottomRightX = rect.left + rect.width;
  const bottomRightY = rect.top + rect.height;

  // Récupérer la position (coordonnées X et Y) du point en bas à gauche
  const bottomLeftX = rect.left;
  const bottomLeftY = rect.top + rect.height;
  const bottom = rect.top + rect.height;

  // Récupérer les dimensions de la div
  const width = rect.width;
  const height = rect.height;

  const coord = {
    bottomRightX: bottomRightX,
    bottomRightY: bottomRightY,
    bottomLeftX: bottomLeftX,
    bottomLeftY: bottomLeftY,
    width: width,
    height: height,
    left: rect.left,
    bottom: bottomLeftY,
    top: rect.top,
  };
 return coord
}

const tlUnderline=gsap.timeline({paused:true, duration:0.1})
tlUnderline.to(ball, { height: 2, duration: 0.2});

const underline = (event: MouseEvent) => {  
      if (ball instanceof HTMLElement) {

    const coord=getPositionAndDimensions(event.target)
    const coordBall = getPositionAndDimensions(ball)
    console.log("ball", coordBall)
    const moveLeft = coord.left+coord.width/2;
    const movetop = coord.bottom-coordBall.top;

tlUnderline.to(ball, { width: coord.width},0 );
tlUnderline.fromTo(ball, { x: coordBall.left }, { x: moveLeft }, 0);
tlUnderline.fromTo(ball, { y: coordBall.top }, { y: coord.bottom }, 0);
tlUnderline.play();
    ball.dataset.anim = "false";



    console.log(coord);
}
};

const resetPointer= (event: MouseEvent) =>{
    if (ball instanceof HTMLElement) {
    ball.dataset.anim = "true";
    tlUnderline.reverse();
}
}


export  const underlineLink = () =>{
if (logo instanceof HTMLElement) {
    logo.addEventListener("mouseover", underline)
    logo.addEventListener("mouseleave", resetPointer)

if (menuButton instanceof HTMLElement) {
    menuButton.addEventListener("mouseenter", underline)
    menuButton.addEventListener("mouseleave", resetPointer);
}}


}
