
const getElementId = (element) => document.getElementById(element)
function openBackground(){
  getElementId("background-options").style.display = "block";
}

/*get new background image*/
function getNewBackground(id){
  let baseBackUrl = "/images/";
  let endUrl = id + ".jpg";
  let backUrl = baseBackUrl + endUrl
  document.getElementById("container").style.backgroundImage = `url(${backUrl})`;
  getElementId("background-options").style.display = "none";
}



function getNewGifBackground(id){
  let baseBackUrl = "/GIF/";
  let endUrl = id + ".gif";
  let backUrl = baseBackUrl + endUrl
  document.getElementById("container").style.backgroundImage = `url(${backUrl})`;
  getElementId("background-options").style.display = "none";
}

/*load random backgrounds*/
window.addEventListener('DOMContentLoaded', (event) => {
  let backsgrounds = ["/images/back.jpg","/images/back1.jpg","/images/back2.jpg","/images/back3.jpg","/images/back4.jpg","/images/back5.jpg","/images/back6.jpg","/images/back7.jpg","/images/back8.jpg","/images/back9.jpg","/images/back10.jpg","/images/back11.jpg","/images/back12.jpg","/images/back13.jpg","/images/back14.jpg","/images/back15.jpg","/images/back16.jpg","/images/back17.jpg","/images/back18.jpg","/images/back19.jpg","/images/back20.jpg","/images/back21.jpg","/images/back22.jpg","/images/back23.jpg","/images/back24.jpg","/images/back25.jpg","/images/back26.jpg","/images/back27.jpg","/images/back28.jpg","/images/back29.jpg","/images/back30.jpg","/images/back31.jpg","/images/back32.jpg","/images/back33.jpg","/images/back34.jpg","/images/back35.jpg"];
  let random = Math.floor(Math.random() * 35);
  document.getElementById("container").style.backgroundImage = `url(${backsgrounds[random]})`;
});


function closeBackgroundGrid(){
  document.getElementById("background-options").style.display = "none";
}

let id = 0;
let dragValue;
let editorNumber = 0;
let container = document.getElementById("drag-container");
let getEditor = () =>{
  
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
    height:375,
    width:450,
    placeholder: 'Type your text here...',
    min_height: 350,
    min_width: 450,
    max_width:450,
    max_height:450,
    resize:'both',
    skin: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oxide-dark' : 'oxide'),
    content_css: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'),
    statusbar: false,
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

  dragValue.style.left = x - 200 + "px";
  dragValue.style.top = y + "px";
  
 }

/*delete editor*/
  deleteButton.addEventListener('click',()=>{
    if(id === id){
    textEditor.classList.add("animate-deleting-editor");
    setTimeout(()=>{
      textEditor.remove();
      id--;
      editorNumber--;
      numberEleOpenTag.innerHTML = editorNumber;
      editorNumber > 0 ? numberEleOpenTag.style.visibility = "visible":numberEleOpenTag.style.visibility = "hidden";
    },200)
  
  }
})

 id += 1;
 editorNumber += 1;
 numberEleOpenTag.innerHTML =editorNumber;
 editorNumber > 0 ? numberEleOpenTag.style.visibility = "visible":numberEleOpenTag.style.visibility = "hidden"
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
let timerNumber = 0;
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
  let numberTimerOpenTag = document.querySelector(".timer-ele-open");

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

    if(seconds < 1 && minutes < 1){
      clearInterval(interval);
    }
     secondFont.innerHTML = seconds;
     minuteFont.innerHTML = minutes + ":";
   }

   startTimerButton.addEventListener('click',()=>{
     if(seconds != 0 || minutes != 0){
     interval = setInterval(startTimer,1000);
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

  dragValue.style.left = x - 200 + "px";
  dragValue.style.top = y + "px";
  
}

deleteButton.addEventListener('click',()=>{
  if(id === id){
  timer1.classList.add("animate-deleting-editor");
  setTimeout(()=>{
    timer1.remove();
    id--;
    timerNumber--;
    numberTimerOpenTag.innerHTML = timerNumber;
    timerNumber > 0 ? numberTimerOpenTag.style.visibility = "visible":numberTimerOpenTag.style.visibility = "hidden";
  },200)

}
})

 id += 1;
 timerNumber += 1;
 console.log(timerNumber);
 numberTimerOpenTag.innerHTML = timerNumber;
 timerNumber > 0 ? numberTimerOpenTag.style.visibility = "visible":numberTimerOpenTag.style.visibility = "hidden";
}

/*Calendar*/
calendarNumber = 0;
function Calendar(){
  let calendarId = id + 100;
  canvas("300px","360px","#fff",calendarId,"0","0");
  let calendar = document.getElementById(calendarId);
  let calendarContainer = document.createElement('div');
  let deleteButton = document.createElement('button');
  let calendarOption = document.createElement('button');
  let currentDateDiv =  document.createElement('div');
  let day = document.createElement('p');
  let month = document.createElement('p');
  let year = document.createElement('p');
  let calendarOptionCanvas = document.querySelector(".settings-calendar");
  let numberCalendarOpenTag = document.querySelector(".calendar-ele-number");

  day.classList.add("day","dates");
  month.classList.add("month","dates");
  year.classList.add("year","dates");
  calendar.classList.add("rounded-divs");
  deleteButton.classList.add("calendar-delete-button");
  calendarOption.classList.add("calendar-options","fa-solid","fa-gear","small-button");
 /*declare dates in variables*/
  
 let date = new Date()
let day1 = date.getDate();
let month1 = date.getMonth()+1;
let year1 = date.getFullYear();

switch(month1){
  case 1: month.innerHTML = "January";
  break;
  case 2: month.innerHTML = "February";
  break;
  case 3: month.innerHTML = "March";
  break;
  case 4: month.innerHTML = "April";
  break
  case 5: month.innerHTML = "May";
  break;
  case 6: month.innerHTML = "June";
  break;
  case 7: month.innerHTML = "July";
  break;
  case 8: month.innerHTML = "August";
  break;
  case 9: month.innerHTML = "September";
  break;
  case 10: month.innerHTML = "October";
  break;
  case 11: month.innerHTML = "November";
  break;
  case 12: month.innerHTML = "December";
  break;
  default:
}

day.innerHTML = day1;

year.innerHTML = year1;

 deleteButton.classList.add("small-button","fa-solid","fa-xmark")
 currentDateDiv.classList.add("current-date-div");
 
 calendarContainer.classList.add("calendar-container","rounded-divs");
 calendar.style.position = "absolute";
 calendar.appendChild(deleteButton);
 calendar.appendChild(calendarOption);
 calendar.appendChild(currentDateDiv);
 currentDateDiv.appendChild(month);
 currentDateDiv.appendChild(day);
 currentDateDiv.appendChild(year);
 calendar.appendChild(calendarContainer);

 let colorPicker1 = document.querySelectorAll(".color-picker").forEach((item1)=>{
  item1.addEventListener('click',()=>{
   
    switch(item1.id){
      case 'white': currentDateDiv.style.backgroundColor = "#FFF";
      break;
      case 'green':currentDateDiv.style.backgroundColor = "#3CDD7CFF";
      break;
      case 'red': currentDateDiv.style.backgroundColor = "#DD3C3CFF" ;
      break;
      case 'blue': currentDateDiv.style.backgroundColor = "#3C7CDDFF";
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
 

 calendar.onmousedown = function(){
  dragValue = calendar;
  calendar.style.zIndex = "100";
}

document.onmouseup = function(e){
dragValue = null;
calendar.style.zIndex = "0";
}
document.onmousemove = function(e){
let x = e.pageX ;
let y = e.pageY ;

dragValue.style.left = x - 150 + "px";
dragValue.style.top = y + "px";

}

deleteButton.addEventListener('click',()=>{
  if(id === id){
  calendar.classList.add("animate-deleting-editor");
  setTimeout(()=>{
    calendar.remove();
    id--;
    
    calendarNumber--;
    numberCalendarOpenTag.innerHTML = calendarNumber;
    calendarNumber > 0 ? numberCalendarOpenTag.style.visibility = "visible":numberCalendarOpenTag.style.visibility = "hidden";
  },200)

}
})

for(let dayCount = 1; dayCount < 32;dayCount++){
  calendarContainer.insertAdjacentHTML("beforeend",`<div class="days">${dayCount}</div>`)
  
}

let currentDay = document.querySelectorAll(".days");
  currentDay.forEach((date,i)=>{
    i + 1  === day1 ? date.style.color = 'red ': null;
  })

 id += 1;
 calendarNumber += 1;
 numberCalendarOpenTag.innerHTML = calendarNumber;
 calendarNumber > 0 ? numberCalendarOpenTag.style.visibility = "visible":numberCalendarOpenTag.style.visibility = "hidden";
}

/*traffic light*/
trafficLightNumber = 0;
function trafficLight(){
  canvas("200px","300px","#fff",id,"0","0");
  let traffic = document.getElementById(id);
  let closeButton = document.createElement("button");
  let trafficImage = document.createElement("img");
  let redLight = document.createElement('div');
  let yellowLight = document.createElement('div');
  let greenLight = document.createElement('div');
  let numberTrafficOpenTag = document.querySelector(".traffic-ele-open");

  trafficImage.src = "/images/traffic.png";
  trafficImage.classList.add("traffic-image");
  traffic.classList.add("rounded-divs");

  redLight.classList.add("lights","red-light");
  yellowLight.classList.add("lights","yellow-light");
  greenLight.classList.add("lights","green-light");

  closeButton.classList.add("small-button","fa-solid","fa-xmark");
  traffic.style.position = "absolute";
  traffic.appendChild(closeButton);
  traffic.appendChild(trafficImage);
  traffic.appendChild(redLight);
  traffic.appendChild(yellowLight);
  traffic.appendChild(greenLight);

  redLight.addEventListener('click',()=>{
    redLight.style.backgroundColor = "#e62807";
    yellowLight.style.backgroundColor = "#3d2d02";
    greenLight.style.backgroundColor = "#023313";
  })
  yellowLight.addEventListener('click',()=>{
    redLight.style.backgroundColor = "#3d0906";
    yellowLight.style.backgroundColor = "#faea0a";
    greenLight.style.backgroundColor = "#023313";
  })
  greenLight.addEventListener('click',()=>{
    redLight.style.backgroundColor = "#3d0906";
    yellowLight.style.backgroundColor = "#3d2d02";
    greenLight.style.backgroundColor = "#07e86c";
  })
 
   /*drag*/
   traffic.onmousedown = function(){
    dragValue = traffic;
    traffic.style.zIndex = "100";
  }
  
  document.onmouseup = function(e){
  dragValue = null;
  traffic.style.zIndex = "0";
  }
  document.onmousemove = function(e){
  let x = e.pageX ;
  let y = e.pageY ;
  
  dragValue.style.left = x - 100 + "px";
  dragValue.style.top = y + "px";
  }

  /*close*/
  closeButton.addEventListener('click',()=>{
    if(id === id){
    traffic.classList.add("animate-deleting-editor");
    setTimeout(()=>{
      traffic.remove();
      id--;
      trafficLightNumber--;
    numberTrafficOpenTag.innerHTML = trafficLightNumber;
    trafficLightNumber > 0 ? numberCalendarOpenTag.style.visibility = "visible":numberTrafficOpenTag.style.visibility = "hidden";
    },200)
  
  }
  })
 
  id += 1;
 trafficLightNumber += 1;
 numberTrafficOpenTag.innerHTML = trafficLightNumber;
 trafficLightNumber > 0 ? numberTrafficOpenTag.style.visibility = "visible":numberTrafficOpenTag.style.visibility = "hidden";
}

/*Random number*/
randomNameNumber = 0;
function RandomName(){
  canvas("400px","430px","#fff",id,"0","0");
  let randomNameContainer = document.getElementById(id);
  let deleteButton =  document.createElement('button');
  let randomInput = document.createElement('textarea');
  let randomResult = document.createElement('div');
  let posibleOptions = document.createElement('div');
  let randomButton = document.createElement('button');
  let result = document.createElement('p');
  let numberOfName = document.createElement('h3');
  let openRandomtag = document.querySelector('.random-ele-number');
  randomNameContainer.classList.add("random-name-container","rounded-divs");
  randomInput.classList.add("random-input");
  deleteButton.classList.add("small-button","fa-solid","fa-xmark");
  randomResult.classList.add("random-result");
  randomButton.classList.add("random-button")
  numberOfName.classList.add("number-of-name");
  posibleOptions.classList.add('posible-options');
  deleteButton.style.marginLeft = "-30px";

  randomInput.placeholder ="Type one name per line..";
  randomButton.innerHTML = "Choose";

  randomNameContainer.appendChild(deleteButton);
  randomNameContainer.appendChild(randomInput);
  randomNameContainer.appendChild(posibleOptions);
  randomResult.appendChild(randomButton);
  randomResult.appendChild(result);
  randomResult.appendChild(numberOfName);
  randomNameContainer.appendChild(randomResult);
   
  /*get random names*/
   let names = [];
   
   randomInput.addEventListener('keydown',(ev)=>{
    if(ev.key === "Enter"){
      names.push(randomInput.value);
      posibleOptions.innerHTML = "Posible options: " + names;
      randomInput.value = '';
    }
   })
   
    numberOfName.innerHTML = names.length + "/100";
    randomButton.addEventListener('click',()=>{
      let random = Math.floor(Math.random() * names.length);
     
      if(names != ""){
        names.length < 2 ? result.innerHTML = "add more names" : result.innerHTML = names[random];  
         names.splice(random,1);
         numberOfName.innerHTML = names.length + "/100";
         posibleOptions.innerHTML = "Posible options: "+ names;
         
      }
    })
  
    /*drag*/
   randomNameContainer.style.position = "absolute";
   randomNameContainer.onmousedown = function(){
    dragValue = randomNameContainer;
    randomNameContainer.style.zIndex = "100";
    randomNameContainer.style.cursor= "pointer";
  }
  
  document.onmouseup = function(e){
  dragValue = null;
 randomNameContainer.style.zIndex = "0";
 randomNameContainer.style.cursor= "";
  }
  document.onmousemove = function(e){
  let x = e.clientX;
  let y = e.clientY;
  
  dragValue.style.left = x - 200  + "px";
  dragValue.style.top = y + "px";
  }

  /*delete*/
  deleteButton.addEventListener('click',()=>{
    if(id === id){
    randomNameContainer.classList.add("animate-deleting-editor");
    setTimeout(()=>{
      randomNameContainer.remove();
      id--;
      randomNameNumber--;
      openRandomtag.innerHTML = randomNameNumber;
       randomNameNumber > 0 ? openRandomtag.style.visibility = "visible":openRandomtag.style.visibility = "hidden";
    },200)
  
  }
  })

  id += 1;
  randomNameNumber += 1;
  openRandomtag.innerHTML = randomNameNumber;
  randomNameNumber > 0 ? openRandomtag.style.visibility = "visible":openRandomtag.style.visibility = "hidden";
}

/*Stopwatch*/
let stopWatchNumber = 0;
let stopWatchInterval;
function stopWatch(){
  canvas("450px","180px","#fff",id,"0","0");
  
  let stopWatchContainer = document.getElementById(id);
  let deleteButton = document.createElement('button');
  let timeContainer = document.createElement('div');
  let seconds = document.createElement('p');
  let minutes = document.createElement('p');
  let hours = document.createElement('p');
  let startButton = document.createElement('button');
  let lapButton = document.createElement('button');
  let clearButton = document.createElement('button');
  let showLapContainer =  document.createElement('div');
  let showLap = document.createElement('p');
  let pauseButton = document.createElement('button');
  
  
  /*add classes to elements*/
  seconds.classList.add("seconds");
  minutes.classList.add("minutes");
  hours.classList.add("hours");
  startButton.classList.add('random-button','start-stopwatch-btn');
  lapButton.classList.add("random-button","lap-button");
  pauseButton.classList.add('random-button','stop-watch-pause-btn');
  clearButton.classList.add('random-button',"clear-button")
  deleteButton.classList.add("small-button","fa-solid","fa-xmark","stop-close-watch");
  timeContainer.classList.add('stopwatch-time-container');
  stopWatchContainer.classList.add("stop-watch-container","rounded-divs");
  showLapContainer.classList.add("show-lap-container");

  let stopWatchHour = 0;
  let stopWatchMinutes = 0;
  let stopWatchSeconds = 0;
  /*nner html*/
  startButton.innerHTML = "Start";
  lapButton.innerHTML = "Lap";
  clearButton.innerHTML = "Clear";
  hours.innerHTML = stopWatchHour + ":";
  minutes.innerHTML = stopWatchMinutes + ":";
  seconds.innerHTML = stopWatchSeconds;
  pauseButton.innerHTML = "Pause";

  /*append children*/
  stopWatchContainer.appendChild(deleteButton);
  stopWatchContainer.appendChild(startButton);
  stopWatchContainer.appendChild(lapButton);
  stopWatchContainer.appendChild(clearButton);
  stopWatchContainer.appendChild(pauseButton);
  stopWatchContainer.appendChild(timeContainer);
  timeContainer.appendChild(hours);
  timeContainer.appendChild(minutes);
  timeContainer.appendChild(seconds);
  stopWatchContainer.appendChild(showLapContainer);
  

  /*stowatch code*/
  stopWatchSeconds < 1 ? lapButton.disabled = true : lapButton.disabled = false;
  function startTimer(){
    stopWatchSeconds++;
    if(stopWatchSeconds === 100){
      stopWatchMinutes++;
      stopWatchSeconds = 0;
    }
    if(stopWatchMinutes > 60){
      stopWatchHour++;
      stopWatchMinutes = 0;
    }
    stopWatchSeconds < 1 ? lapButton.disabled = true : lapButton.disabled = false;
    hours.innerHTML = stopWatchHour + ":";
    minutes.innerHTML = stopWatchMinutes + ":";
    seconds.innerHTML = stopWatchSeconds;
  }
  
  startButton.addEventListener('click',()=>{
     stopWatchInterval = setInterval(startTimer,10);
     pauseButton.style.visibility = "visible";
     startButton.style.visibility = "hidden";
  })
  
  pauseButton.addEventListener('click',()=>{
     clearInterval(stopWatchInterval);
     pauseButton.style.visibility = "hidden";
     startButton.style.visibility = "visible";
  })
  clearButton.addEventListener('click',()=>{
    stopWatchHour = 0;
    stopWatchMinutes = 0;
    stopWatchSeconds = 0;
    hours.innerHTML = 0 + ":";
    minutes.innerHTML = 0 + ":";
    seconds.innerHTML = 0;
    clearInterval(stopWatchInterval);
  })

  lapButton.addEventListener('click',()=>{
    stopWatchContainer.classList.add("new-stopwatch-size");
    let showLap = document.createElement('p');
    showLap.classList.add("show-lap");
    showLapContainer.appendChild(showLap);
    setTimeout(()=>{
      showLapContainer.style.display = "block";
    },500);
  
    showLap.innerHTML = stopWatchHour +':'+ stopWatchMinutes +':' + stopWatchSeconds;
  })
 
  /*drag*/
  stopWatchContainer.style.position = "absolute";
   stopWatchContainer.onmousedown = function(){
    dragValue = stopWatchContainer;
    stopWatchContainer.style.zIndex = "100";
    stopWatchContainer.style.cursor= "pointer";
  }
  
  document.onmouseup = function(e){
  dragValue = null;
 stopWatchContainer.style.zIndex = "0";
 stopWatchContainer.style.cursor= "";
  }
  document.onmousemove = function(e){
  let x = e.clientX;
  let y = e.clientY;
  
  dragValue.style.left = x - 200  + "px";
  dragValue.style.top = y + "px";
  }

  deleteButton.addEventListener('click',()=>{
    if(id === id){
    stopWatchContainer.classList.add("animate-deleting-editor");
    setTimeout(()=>{
      stopWatchContainer.remove();
      id--;
      stopWatchNumber--;
    
    },200)
  
  }
  })

  id += 1;
}

/*Scores and stars*/
function getScores(){
  canvas("450px","180px","#fff",id,"0","0");
  
  let scoresContainer = document.getElementById(id);
  let scoresInputContainer = document.createElement('div');
  let deleteButton = document.createElement('button');
  let inputName = document.createElement('input');
  let inputNumber = document.createElement('input');
  let enterScores =  document.createElement('button');
  let getScoresBtn = document.createElement('button');
  let buttonsContainer = document.createElement('div');
  let studentScores = document.createElement('div');
 
  /*add classes to element*/
  deleteButton.classList.add("small-button","fa-solid","fa-xmark");
  scoresInputContainer.classList.add('scores-input-container');
  inputNumber.classList.add('input-number');
  scoresContainer.classList.add('scores-container','rounded-divs');
  enterScores.classList.add('random-button','enter-scores');
  getScoresBtn.classList.add('random-button','get-scores-btn');
  buttonsContainer.classList.add('buttons-container');
  studentScores.classList.add('students-scores');
  /*append child elements*/
  scoresContainer.appendChild(deleteButton);
  scoresContainer.appendChild(buttonsContainer);
  buttonsContainer.appendChild(enterScores);
  buttonsContainer.appendChild(getScoresBtn);
  scoresContainer.appendChild(scoresInputContainer);
  scoresInputContainer.appendChild(inputName);
  scoresInputContainer.appendChild(inputNumber);
  scoresContainer.appendChild(studentScores);
  

  /*inner html*/
  inputName.placeholder = "Enter name..."
  inputNumber.type = "number";
  enterScores.innerHTML = "Enter";
  getScoresBtn.innerHTML = "Show Scores";
  inputNumber.min = "0";
  inputNumber.max = "10";

  /*create student object*/
  
  let suffix = 0;
  let scores = [];
  let students = []
  enterScores.addEventListener('click',()=>{
  
      students[suffix] = {
        name:"",
        score:inputNumber.value,
        addScores: function(){
          this.name = inputName.value;
          this.scores = inputNumber.value;
        }
      }
     
      scores.push(students[suffix]);
      students[suffix].addScores();

      /*new*/
      let person = " ";
   let scoresDiv = document.createElement('div');
   for(let x in scores){
     let divWidh = scores[x].score + 0;
    person += scores[x].name + ": " + scores[x].score + "<br>"  + `<div class="scores-div" style="width: ${divWidh}px"></div>`;
    studentScores.innerHTML = person;
  }
   
   
      
      suffix += 1;
      inputName.value = "";
      inputNumber.value = "";
  })
  
  getScoresBtn.addEventListener('click',()=>{
   
   scoresContainer.classList.toggle("animate-scores");
   studentScores.classList.toggle('hide-scores');
   
  })
 
 
  /*drag*/
  scoresContainer.style.position = "absolute";
  scoresContainer.onmousedown = function(){
    dragValue = scoresContainer;
    scoresContainer.style.zIndex = "100";
    scoresContainer.style.cursor= "pointer";
  }
  
  document.onmouseup = function(e){
  dragValue = null;
 scoresContainer.style.zIndex = "0";
 scoresContainer.style.cursor= "";
  }
  document.onmousemove = function(e){
  let x = e.clientX;
  let y = e.clientY;
  
  dragValue.style.left = x - 200  + "px";
  dragValue.style.top = y + "px";
  }

  /*delete*/
  deleteButton.addEventListener('click',()=>{
    if(id === id){
    scoresContainer.classList.add("animate-deleting-editor");
    setTimeout(()=>{
      scoresContainer.remove();
      id--;
     
    
    },200)
  
  }
  })

  id += 1;
}