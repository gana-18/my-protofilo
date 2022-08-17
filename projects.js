const projects=[
    {
        id:1,
        name:"Tip-calculator",
        img:"./images/calc.jpg",
        live:"https://gana-18.github.io/tip-calculator/",
        code:"https://github.com/gana-18/tip-calculator",
    },
    {
        id:2,
        name:"Restaurant",
        img:"./images/rest.jpg",
        live:"https://gana-18.github.io/restaurant/",
        code:"https://github.com/gana-18/restaurant",
    },
    {
      id:3,    
        name:"Link saver",
        img:"./images/chrome.jpg",
        live:"https://github.com/gana-18/chrome-extension",
        code:"https://github.com/gana-18/chrome-extension",
    },
    {
      id:4,
        name:"BlackJack Game",
        img:"./images/Screenshot 2022-06-26 191314.jpg",
        live:"https://gana-18.github.io/BlackJack-Game/",
        code:"https://github.com/gana-18/BlackJack-Game",
    },
    {
      id:5,
        name:"Ping Pong",
        img:"./images/Screenshot 2022-06-26 191602.jpg",
        live:"https://gana-18.github.io/BlackJack-Game/",
        code:"https://gana-18.github.io/BlackJack-Game/",
    },
    {
      id:6,
      name:"Blog",
      img:"./images/Screenshot 2022-06-26 191503.jpg",
      live:"https://gana-18.github.io/Best-Websites-To-Learn-Front-End/",
      code:"https://github.com/gana-18/Best-Websites-To-Learn-Front-End",
    },
];
const imgp=document.querySelector(".img2");
const textEl=document.querySelector(".text-el");
const codeEl=document.querySelector(".codep");
const liveEl=document.querySelector(".live");
let currentItem=0;
window.addEventListener("DOMContentLoaded",function(){
  const item=projects[currentItem]
  imgp.src=item.img
  textEl.textContent=item.name
  codeEl.href=item.code
  liveEl.href=item.live
})
function show(person){
  const item=projects[person]
  imgp.src=item.img
  textEl.textContent=item.name
  codeEl.href=item.code
  liveEl.href=item.live
}
function prev(){
  currentItem--;
  if(currentItem<0)
  currentItem=projects.length-1
  show(currentItem)
};
function next(){
  currentItem++;
  if(currentItem>projects.length-1)
  currentItem=0
  show(currentItem)
};
