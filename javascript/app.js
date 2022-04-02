
const getElementId = (element) => document.getElementById(element)
function openBackground(){
  getElementId("background-options").style.display = "block";
}

/*get new background image*/
function getNewBackground(id){
 
  let baseBackUrl = "/images/";
  let endUrl = id + ".jpg";
  let backUrl = baseBackUrl + endUrl
  console.log(backUrl)
  document.getElementById("container").style.backgroundImage = `url(${backUrl})`;
  getElementId("background-options").style.display = "none";
}


let id = 0;
let dragValue;

let getEditor = () =>{
  console.log(id)
  let container = document.getElementById("drag-container");
   canvas("400px","400px","#fff",id);
  let textEditor =document.getElementById(id);
  let toolbar = document.createElement("div");
  let deleteButton = document.createElement('button');
  let i = document.createElement("i");


  /*create text area*/
  toolbar.classList.add("toolbar");
  textEditor.classList.add("the-editor");
  i.classList.add("fa-solid");
  i.classList.add("fa-x");
  deleteButton.classList.add("delete-button");
  deleteButton.classList.add("small-button");

  
  deleteButton.setAttribute('id',id);
  toolbar.setAttribute('id','toolbar');

  deleteButton.appendChild(i);
  textEditor.appendChild(deleteButton);
  textEditor.appendChild(toolbar);
  container.appendChild(textEditor);
  
  /*textarea creation*/
  let input = document.createElement("textarea");
  input.name = "post";
  input.maxLength = "500";
  input.cols = "37";
  input.rows = "15";
  input.style.marginLeft = "3px";
  input.placeholder = "Type name here..";
  textEditor.appendChild(input); //appendChild

  let ele = getElementId(id);
  ele.style.position = "absolute";
  
  ele.onmousedown = function(){
    dragValue = ele;
    ele.style.zIndex = "100";
  }

 document.onmouseup = function(e){
  dragValue = null;
  ele.style.zIndex = "0";
 }
 document.onmousemove = function(e){
  let x = e.pageX;
  let y = e.pageY;

  dragValue.style.left = x +"px";
  dragValue.style.top = y + "px";

  
 }

/*delete editor*/
  deleteButton.addEventListener('click',()=>{
    if(id === id){
    textEditor.classList.add("animate-deleting-editor");
    setTimeout(()=>{
      textEditor.remove();
      id--;
    },200)
  
  }
})

 id += 1;
}

/*create canvas to reuse*/

let canvas = (width,height,background,id)=>{
    let canvas = document.createElement("div");
    let container = document.getElementById("drag-container");
    canvas.style.width = width || "200px";
    canvas.style.height = height || "200px";
    canvas.style.backgroundColor = background;
    canvas.setAttribute('id',id);
    container.appendChild(canvas);
}

/*create timer*/
function timer(){
   canvas("500px",null,"#fff",id);
   let timer1 = document.getElementById(id);
  
  let deleteButton = document.createElement('button');
  let timerOption = document.createElement('button');
  let timerFont = document.createElement('p');
  let optionsCanvas = document.querySelector(".settings-nav");
  let startTimerButton = document.createElement("button");

  deleteButton.classList.add("small-button");
  deleteButton.classList.add("delete-button");
  startTimerButton.classList.add("start-timer-button");
  startTimerButton.innerHTML += "<i>></i>";

  timerOption.classList.add("small-button");
  timerOption.classList.add("timer-options")
  
  timerFont.classList.add("timer-font");

  /*Set timer function*/
  startTimerButton.addEventListener('click',()=>{
    setInterval(updateCountdown,100);
  })
   
   const startingMinutes = 10;
   let time = startingMinutes * 60;
    function updateCountdown(){
      const minutes  = Math.floor(time / 60);
      let seconds = time % 60;
      timerFont.innerHTML = `${minutes}: ${seconds}`;
      if(minutes <= 0 && seconds <= 0){
        minutes = 0;
        seconds = 0;
      }
      time--;
    }
  timer1.appendChild(deleteButton);
  timer1.appendChild(timerOption);
  timer1.appendChild(timerFont);
  timer1.appendChild(startTimerButton);


  timerOption.addEventListener('click',()=>{
    optionsCanvas.classList.toggle("settings-animation")
  })
  
  /*get background color bottom, it gets the id to generate the color*/
let colorPicker = document.querySelectorAll(".color-picker").forEach((item)=>{
  item.addEventListener('click',()=>{
    console.log(id)
    console.log(item.id)
    switch(item.id){
      case 'white': timer1.style.backgroundColor = "#FFF";
      break;
      case 'green': timer1.style.backgroundColor = "#3CDD7CFF";
      break;
      case 'red': timer1.style.backgroundColor = "#DD3C3CFF" ;
      break;
      case 'blue': timer1.style.backgroundColor = "#3C7CDDFF";
      break;
      case 'light-blue': timer1.style.backgroundColor = "#8FD8E9FF";
      break;
      case 'orange': timer1.style.backgroundColor = "#DD9C3CFF";
      break;
      case 'purple': timer1.style.backgroundColor = "#5C3CDDFF";
      break;
      case 'magenta': timer1.style.backgroundColor = "#DD3C9CFF";
      break;
      case 'black': timer1.style.backgroundColor = "#000000FF";
      break;
      case 'skin': timer1.style.backgroundColor = "#FEFFCBFF";
      break;
      case 'yellow': timer1.style.backgroundColor = "#f2de05";
      break;
      case 'light-purple': timer1.style.backgroundColor = "#bf05f2";
      break;
    }
    
  })
})
  /*arrow to close background options*/
  let backgroundOptionsArrow = document.querySelector(".seeting-nav-top-botton").addEventListener('click',()=>{
    optionsCanvas.classList.remove("settings-animation");
  })

  
 
  timer1.style.position = "absolute";
  
  timer1.onmousedown = function(){
    dragValue = timer1;
    timer1.style.zIndex = "100";
  }

 document.onmouseup = function(e){
  dragValue = null;
  timer1.style.zIndex = "0";
 }
 document.onmousemove = function(e){
  let x = e.pageX;
  let y = e.pageY;

  dragValue.style.left = x +"px";
  dragValue.style.top = y + "px";
  
}

deleteButton.addEventListener('click',()=>{
  if(id === id){
  timer1.classList.add("animate-deleting-editor");
  setTimeout(()=>{
    timer1.remove();
    id--;
    optionsCanvas.classList.remove("settings-animation")
  },200)

}
})

id += 1;
}

  
  

