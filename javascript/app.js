
const getElementId = (element) => document.getElementById(element)
function openBackground(){
  getElementId("background-options").style.display = "block";
}

/*load random backgrounds*/
window.addEventListener('DOMContentLoaded', (event) => {
  let backsgrounds = ["/images/back.jpg","/images/back1.jpg","/images/back2.jpg","/images/back3.jpg","/images/back4.jpg","/images/back5.jpg","/images/back6.jpg","/images/back7.jpg","/images/back8.jpg","/images/back9.jpg"];
  let random = Math.floor(Math.random() * 10);
  console.log(random)
  document.getElementById("container").style.backgroundImage = `url(${backsgrounds[random]})`;
});

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

let container = document.getElementById("drag-container");
let getEditor = () =>{
  console.log(id)

  canvas("450px","10px","transparent",id,"0px","0px");
  let textEditor =document.getElementById(id);
  let toolbar = document.createElement("div");
  let deleteButton = document.createElement('button');
  let closeEditor = document.createElement("i");
  let myText = document.createElement('div');
  let textEditorOptionButton = document.createElement("button");
  let numberEleOpenTag = document.querySelector(".number-ele-open");
  /*create text area*/
  toolbar.classList.add("toolbar");
  textEditor.classList.add("the-editor");
  closeEditor.classList.add("fa-solid");
  closeEditor.classList.add("fa-x");
  deleteButton.classList.add("delete-button","small-button");
  myText.classList.add("my-text")
  textEditorOptionButton.classList.add("fa-solid","fa-gear","small-button","text-editor-options");
 
  deleteButton.setAttribute('id',id);
  toolbar.setAttribute('id','toolbar');
  
  /*editor navbar*/

  deleteButton.appendChild(closeEditor);
  textEditor.appendChild(deleteButton);
  textEditor.appendChild(toolbar);
  textEditor.appendChild(myText);
  container.appendChild(textEditor);
  textEditor.appendChild(textEditorOptionButton);
 
  /*textarea creation*/
 
  
  tinymce.init({
    selector: '.my-text',
    height:450,
    width:450,
    placeholder: 'Type your text here...',
    min_height: 450,
    min_width: 450,
    max_width:450,
    max_height:450,
    resize:'both',
    skin: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oxide-dark' : 'oxide'),
    content_css: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default')
  });
 
 
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
  let x = e.clientX;
  let y = e.clientY;

  dragValue.style.left = x + "px";
  dragValue.style.top = y + "px";
  
 }

/*delete editor*/
  deleteButton.addEventListener('click',()=>{
    if(id === id){
    textEditor.classList.add("animate-deleting-editor");
    setTimeout(()=>{
      textEditor.remove();
      id--;
      numberEleOpenTag.innerHTML = id;
      id > 0 ? numberEleOpenTag.style.visibility = "visible":numberEleOpenTag.style.visibility = "hidden";
    },200)
  
  }
})

 id += 1;
 numberEleOpenTag.innerHTML = id;
 id > 0 ? numberEleOpenTag.style.visibility = "visible":numberEleOpenTag.style.visibility = "hidden";
}

/*create canvas to reuse*/

let canvas = (width,height,background,id,posLeft,posHeight)=>{
    let canvas = document.createElement("div");
    let container = document.getElementById("drag-container");
    canvas.style.width = width || "200px";
    canvas.style.height = height || "200px";
    canvas.style.backgroundColor = background;
    canvas.style.marginLeft = posLeft;
    canvas.style.marginTop = posHeight;
    canvas.setAttribute('id',id);
    container.appendChild(canvas);
}

/*create timer*/
 function timer(){
   canvas("400px","180px","#fff",id,"0px","0px");
   let timer1 = document.getElementById(id);
  
  let deleteButton = document.createElement('button');
  let timerOption = document.createElement('button');
  let timerAndButtonDiv =  document.createElement("div");
  let minuteFont = document.createElement('p');
  let secondFont = document.createElement('p');
  let optionsCanvas = document.querySelector(".settings-nav");
  let plusTimerButton = document.createElement("button");
  let minusTimerButton = document.createElement("button");
  let plusSecondButton = document.createElement("button");
  let minusSecondButton = document.createElement("button");
  let startTimerButton = document.createElement("button");
  let pauseTimerButton = document.createElement("button");
  let timerRefreshButton =  document.createElement("button");
  

  deleteButton.classList.add("small-button","delete-button","fa-solid","fa-xmark");
  timerAndButtonDiv.classList.add("timerAndButtonDiv");
  timer1.classList.add("rounded-divs");
  /* timer buttons*/
  plusTimerButton.classList.add("plus-minute","timer-inside-button","fa-solid","fa-plus");
 
  minusTimerButton.classList.add("minus-minute","fa-solid","fa-minus","timer-inside-button");

  timerOption.classList.add("small-button","timer-options","fa-solid","fa-gear");
  
  minuteFont.classList.add("minute-font","timer-font");
  secondFont.classList.add("timer-font","second-font");

  plusSecondButton.classList.add("timer-inside-button","fa-solid","fa-plus","plus-second-button");
  minusSecondButton.classList.add("timer-inside-button","fa-solid","fa-minus","minus-second-button")

  startTimerButton.classList.add("fa-solid","fa-play","small-button","start-timer-button");
  pauseTimerButton.classList.add("fa-solid","fa-pause","small-button","puase-timer-button");
  timerRefreshButton.classList.add("fa-solid","fa-arrows-rotate","small-button","refresh-timer-button");

  
  let minutes = 0;
  let seconds = 0;
  let interval;

  minuteFont.innerHTML = minutes + ":";
  secondFont.innerHTML = seconds;
  plusTimerButton.addEventListener('click',()=>{
    
      minutes++;
      if(minutes >= 60){
        minutes = 60;
      }
      minuteFont.innerHTML = minutes + ":";
  })
  minusTimerButton.addEventListener('click',()=>{
      minutes--;
      if(minutes <= 0){
        minutes = 0;
      }
      minuteFont.innerHTML = minutes + ":";
  })

  plusSecondButton.addEventListener('click',()=>{
  seconds++;
  if(seconds >= 61){
    minuteFont.innerHTML = minutes++ +":";
    seconds = 0;
  }
  secondFont.innerHTML = seconds;
  })

  minusSecondButton.addEventListener('click',() =>{
    seconds--;
  if(seconds <= 0){
    seconds = 0;
  }
  secondFont.innerHTML = seconds;
  })

  /*Set timer function*/
   function startTimer(){
     seconds--;
     seconds <= 0 ? seconds = 60 : seconds = seconds;
    if(seconds <= 1){
      minutes--;
    }

    if(seconds < 0 && minutes < 0){
      clearInterval(interval);
    }
     secondFont.innerHTML = seconds;
     minuteFont.innerHTML = minutes + ":";
   }

   startTimerButton.addEventListener('click',()=>{
     if(seconds != 0 || minutes != 0){
     interval = setInterval(startTimer,100);
     }
     startTimerButton.style.visibility = "hidden";
     pauseTimerButton.style.visibility = "visible";
   })
   pauseTimerButton.addEventListener('click',()=>{
     clearInterval(interval);
     startTimerButton.style.visibility ="visible";
     pauseTimerButton.style.visibility = "hidden";
   })
    timerRefreshButton.addEventListener('click',()=>{
      seconds = 0;
      minutes = 0;
      secondFont.innerHTML = 0;
     minuteFont.innerHTML = 0 + ":";
     startTimerButton.style.visibility ="visible";
     pauseTimerButton.style.visibility = "hidden";
      clearInterval(interval);
    })
  timer1.appendChild(deleteButton);
  timer1.appendChild(timerOption);
  timerAndButtonDiv.appendChild(minuteFont);
  timerAndButtonDiv.appendChild(plusTimerButton);
  timerAndButtonDiv.appendChild(minusTimerButton);
  timerAndButtonDiv.appendChild(secondFont);
  timerAndButtonDiv.appendChild(plusSecondButton);
  timerAndButtonDiv.appendChild(minusSecondButton);
  timerAndButtonDiv.appendChild(startTimerButton);
  timerAndButtonDiv.appendChild(pauseTimerButton);
  timerAndButtonDiv.appendChild(timerRefreshButton);
  timer1.appendChild(timerAndButtonDiv);

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
  let x = e.pageX ;
  let y = e.pageY ;

  dragValue.style.left = x + "px";
  dragValue.style.top = y + "px";
  
}

deleteButton.addEventListener('click',()=>{
  if(id === id){
  timer1.classList.add("animate-deleting-editor");
  setTimeout(()=>{
    timer1.remove();
    id--;
  },200)

}
})

id += 1;
numberEleOpenTag.innerHTML = id;
 id > 0 ? numberEleOpenTag.style.visibility = "visible":numberEleOpenTag.style.visibility = "hidden";
}

function Calendar(){
  canvas("450px","350px","#fff",id,"0","0");
  let calendar = document.getElementById(id);
  let calendarContainer = document.createElement('div');
 let deleteButton = document.createElement('button');
 let calendarOption = document.createElement('button');

 deleteButton.classList.add("small-button","fa-solid","fa-xmark")
 
 calendarContainer.classList.add("calendar-container")
 calendar.style.position = "absolute";
 calendar.appendChild(deleteButton);
 calendar.appendChild(calendarOption);
 calendar.appendChild(calendarContainer);
 calendar.onmousedown = function(){
  dragValue = calendar;
  calendar.style.zIndex = "100";
}

for(let i = 1; i < 31;i++){
  calendarContainer.insertAdjacentHTML("beforeend",`<div class="days">${i}</div>`)
}

document.onmouseup = function(e){
dragValue = null;
calendar.style.zIndex = "0";
}
document.onmousemove = function(e){
let x = e.pageX ;
let y = e.pageY ;

dragValue.style.left = x + "px";
dragValue.style.top = y + "px";

}

deleteButton.addEventListener('click',()=>{
  if(id === id){
  calendar.classList.add("animate-deleting-editor");
  setTimeout(()=>{
    calendar.remove();
    id--;
    optionsCanvas.classList.remove("settings-animation")
  },200)

}
})

 console.log(id);
 id += 1;
}