
const displayTime = document.getElementById("displayTime");
const startbtn = document.getElementById("start");
const resetbtn = document.getElementById("reset");
const stopbtn = document.getElementById("stop");


let [seconds, minutes, hours] = [0,0,0];

let timer =null;


function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
          if(minutes==60)
          {
            minutes=0;
            hours++;
          }
    }
    //       condition       true      false 
      let h = hours <10 ? "0"+hours : hours;
      let m = minutes <10 ? "0"+minutes : minutes;
      let s = seconds <10 ? "0"+seconds : seconds;

    displayTime.innerHTML= h+":"+ m+":"+ s;

}

function watchstart(){
    if(timer!=null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000);
    console.log(timer);
}

function watchreset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML="00:00:00";
}
function watchstop(){
    clearInterval(timer);

}
 
startbtn.addEventListener("click" , watchstart);
resetbtn.addEventListener("click" , watchreset);
stopbtn.addEventListener("click" , watchstop);

