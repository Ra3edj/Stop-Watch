
let hourstext = document.querySelector(".hours");
let minutestext = document.querySelector(".minutes");
let secondstext = document.querySelector(".seconds");
let startbtn = document.querySelector(".start");
let stopbtn = document.querySelector(".stop");
let resetbtn = document.querySelector(".reset");

let hr = 00;
let min = 00;
let sec = 00;
let Interval;

startbtn.addEventListener("click" , ()=>
 {
    Interval = setInterval(function(){
        sec++
        secondstext.textContent = sec;
        minandhrcheck();
        zeroscheck();
    }, 1000);
   
 });

 function zeroscheck()
 {
     if(sec <= 9)
     {
         secondstext.textContent =`0`+ sec;
     }
     else if(min <= 9)
     {
         minutestext.textContent = `0` + min;
     }
     else if(hr <= 9)
     {
         hourstext.textContent =`0` + hr;
     }
    
 };


 function minandhrcheck()
 {
     if(sec == "60")
     {
         sec = 00;
         secondstext.textContent = sec;
         min++;
         minutestext.textContent = min;
     }
     else if(min == "60")
     {
         min = 00;
         minutestext.textContent = min;
         hr++;
         hourstext.textContent = hr;
     
    }
 };

 stopbtn.addEventListener("click", () =>
 {
     clearInterval(Interval);
 });

 resetbtn.addEventListener("click" , () => 
 {
     sec = "00";
     min = "00";
     hr = "00";
     secondstext.textContent = sec;
     minutestext.textContent = min;
     hourstext.textContent = hr;    
     clearInterval(Interval);
 });
