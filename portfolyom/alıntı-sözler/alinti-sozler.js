/*
const url ='https://api.openweathermap.org/data/2.5/';
const key = 'a5852d7f9c9d5a3f6a108b491d42d88c';

const setQuery = (e) =>{ // e event yani olay
if(e.keyCode == '13')
getResult(searchBar.value)
}
const getResult = (cityName) =>{
    let query =`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
    console.log(query);
    fetch(query);//dosyayı görüntüler
    
}
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress', setQuery) ; *///enter tuşuna basıldığında şehir girilmiş olsun istiyoruz
/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const cityInput = document.querySelector('box');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    getData(cityInput.value);
});

function getData(name) {
    const API ="a5852d7f9c9d5a3f6a108b491d42d88c";
    const baseURL =`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr `;
    fetch(baseURL).then(res => res.json())
        .then(data => 
            { const { name, sys: { country }, main: { temp, feels_like }, weather: [{description}] } = data;
            const city = document.querySelector('city');
            const tem = document.querySelector('temp');
            const des = document.querySelector('desc');
            const min = document.querySelector('minmax');
            city.textContent`${name}, ${country}`;
            des.textContent =`${description}`;
            tem.textContent =`${temp}`;
            min.textContent =`${feels_like}`;
            
        })
        .catch(err => console.warn(err));
} */


async function getUsers() {
  let url = 'https://type.fit/api/quotes';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderUsers() {
  let users = await getUsers();
  document.querySelector(' .content').innerHTML = users.forEach(user=>user.text);

 /* let html = '';
  users.forEach( user => {
    let htmlSegment = ` <div class="content">  
                        <p id="text">${user.text}</p>
                        <p id="author">${user.author}</p>
                        </div> `;

          html +=htmlSegment;              
  });

  let content =document.querySelector('.content');
  content.innerHTML = html;*/

}
renderUsers();










/*
const quotes=[];
const colors=["#121212" , "#f565f5" ,"#797979", "#565656" ,"#5f9ea0" , "#a9a9a90"]

function getQuotes(){
    return fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data=> {
      quotes=data;
        change();
       console.log({data});
        
    }) }
    getQuotes();

    
  getText("https://type.fit/api/quotes");

  async function getText(file){
    let myObject = await fetch(file);
    let myText = await myObject.text();

    document.getElementById("text").innerHTML = myText ;
  }
  getText();

//tıkladığında butona değiştirsin göstersin
function change(){
    const count = quotes.length;
    const rndmNumb = Math.floor(Math.random()*count);

    document.getElementById('text').innerText= quotes[rndmNumb].text;
    document.getElementById('author').innerText="-"+quotes[rndmNumb].author;

    const  rndColorNumb =Math.floor(Math.random()*6);
    document.body.style.backgroundColor=colors[rndColorNumb];


}*/
