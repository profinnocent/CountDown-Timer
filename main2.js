const day = document.querySelector('.day div');
const hour = document.querySelector('.hour div');
const mins = document.querySelector('.min div');
const sec = document.querySelector('.sec div');
const body = document.querySelector('body');
const message = document.querySelector('.message');


let tDate= prompt("Please enter a date to countdown to in this format : dd mmm yyyy");


let now = new Date()
let date = new Date(tDate);
let secCount = date.getSeconds() - now.getSeconds();
let minCount = date.getMinutes() - now.getMinutes();
let hrCount = date.getHours() - now.getHours();
let dayCount = date.getDate() - now.getDate();


startTime = () =>{
//set min origin
if(minCount < 10){
  mins.innerText = '0'+minCount;
}else{
    mins.innerText = minCount;
}

//set hour origin
hour.innerText = hrCount;

//set day origin
day.innerText = dayCount;
}

startTime();


//seconds handler function
timeFunc = () => {
  if(secCount==0 && minCount==0 && hrCount==0 && dayCount==0){
    body.style.backgroundImage = 'url(bgpix2.jpg)';
    message.innerText = 'Happy New Year';
    clearInterval(timer);
  }
  else if(secCount>0){
    secCount--;
    sec.innerText = secCount;
  }
  else if(secCount==0 && minCount>0){
    minCount--;
    secCount = 59;
    mins.innerText = minCount;
    sec.innerText = secCount;
  }
  else if(secCount==0 && minCount==0 && hrCount>0){
    hrCount--;
    minCount = 59;
    secCount = 59;
    hour.innerText = hrCount;
    mins.innerText = minCount;
    sec.innerText = secCount;
  }
  else{
    dayCount--;
    hrCount = 23;
    minCount = 59;
    secCount = 59;
    day.innerText = dayCount;
    hour.innerText = hrCount;
    mins.innerText = minCount;
    sec.innerText = secCount;

  } 

}

//seconds interval call
let timer = setInterval(timeFunc, 1000);

