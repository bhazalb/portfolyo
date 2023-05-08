const body = document.querySelector("body") ,
  hourHand = document.querySelector(".hour") ,
  minuteHand = document.querySelector(".minute") ,
  secondHand = document.querySelector(".second") ,
  modeSwitch = document.querySelector(".mode-switch") ;



    if(localStorage.getItem("mode")=== "Dark Mode"){
        body.classList.add("dark");
        modeSwitch.textContent = "Light Mode";
    }

    /* LOCALSTORAGE KULLANDIN */

  modeSwitch.addEventListener("click", () =>{
    body.classList.toggle("dark");

    /* body öğesinde şu anda "dark" sınıfının olup olmadığını kontrol edin  */
     const isDarkMode= body.classList.contains("dark");
     modeSwitch.textContent= isDarkMode ?"Light Mode" : "Dark Mode";

     localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
  });


  const updateTime = () =>{
  let date = new Date(),
  secToDeg =(date.getSeconds() / 60) * 360;
  minToDeg =(date.getMinutes() / 60) * 360;
  hrToDeg =(date.getHours() / 12) * 360;
  
  //saat ibrelerini geçerli zamana göre uygun dereceye döndürün
 secondHand.style.transform =`rotate(${secToDeg}deg)`;
 minuteHand.style.transform =`rotate(${minToDeg}deg)`;
 hourHand .style.transform =`rotate(${hrToDeg}deg)`;

};

  setInterval(updateTime, 1000);
  updateTime();
