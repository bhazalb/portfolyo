


//madde eklemek için
function newElement(){
    const li = document.createElement('li');
    const inputValue = document.getElementById("box").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.querySelector("#list").appendChild(li);
    document.getElementById("box").value = "";
    const span = document.createElement('span');
    const text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    li.appendChild(span);
    span.onclick = function(){
      const li = this.parentElement;//her li elemanının spanına ulaştık
      li.style.display ='none';
    }
}




const inputBox = document.getElementById('box');

const inputText = inputBox.value;

localStorage.setItem('savedText' , inputText);


/*
// Öğeleri saklamak için bir dizi oluşturuyoruz
let itemsArray = [];

// Sayfa yüklendiğinde kaydedilmiş öğeleri yükleme
window.onload = function() {
  const li = document.createElement('li');
  let Li= localStorage.getItem("li");

  if (Li !== null) {
    itemsArray = JSON.parse(Li);
    displayItems();
  }
}*/







/*function deleteLi() {
  const list = document.getElementById("list");
  const selectedLi = document.getElementsByClassName("selected");
  list.removeChild(list.selectedLi);
}*/

/*const span = document.createElement('span');
const text = document.createTextNode('\u00D7');
span.className = 'close';
span.appendChild(text);
li.appendChild(span);*/




//denenen
/*function newFunction(){
  const x = document.querySelector("#li");
  x.remove(x);
}*/

/*function deleteLi() {
  const x = document.getElementsByTagName("li");
  x[0].remove();
}*/

/*function newFunction() {
  var x = document.getElementById("li");
  if (onclick === "#li") {
    x.remove(x);
  } else {
    x.remove(x);
  }
}*/

/*
var todoList = document.getElementById("todo-list");
  var itemCount = 1;

  function addItem() {
    var newItem = document.createElement("li");
    newItem.id = "item-" + itemCount;
    newItem.innerHTML = '<input type="text" value="Öğe ' + itemCount + '"> <button class="delete" onclick="removeItem(\'' + newItem.id + '\')">Sil</button>';
    todoList.appendChild(newItem);
    itemCount++;
  }

  function removeItem(itemId) {
    var item = document.getElementById(itemId);
    todoList.removeChild(item);
  }*/
/*document.addEventListener("click", deneme);
function deneme(){
    
}*/



/*var list = document.querySelector('ul');
list.addEventListener('click', function() {
    if (list.target.tagName === 'list') {
      list.target.classList.toggle('checked');
    }
  }, false);*/

/*document.getElementById(list).onclick=function(){
    list.addEventListener('click', function() {
    if (list.target.tagName === 'list') {
      list.target.classList.toggle('checked');
    }
  }, false);
}
*/
/*var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}*/