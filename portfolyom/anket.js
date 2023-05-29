



/*
document.getElementById('anketForm').addEventListener('submit', function(e) {
  e.preventDefault();  //yönlendirmeyi kapatt

 const soru1Cevap = document.querySelector('input[name="soru1"]:checked');
 const soru2Cevap = document.querySelector('input[name="soru2"]:checked');
 const soru3Cevap = document.querySelector('input[name="soru3"]:checked');


 
 const  soru1CevapDegeri = soru1Cevap.value;
 const soru2CevapDegeri = soru2Cevap.value;
 const soru3CevapDegeri = soru3Cevap.value;

    const sonuclarListesi = document.createElement('li');
    

     // var sonuclarListesi = document.createElement('ul');
     const soru1Sonucu = document.querySelector("#list").appendChild(li);
      soru1Sonucu.textContent = 'Soru 1 Cevabınız: ' + soru1CevapDegeri;
      sonuclarListesi.appendChild(soru1Sonucu);

      const soru2Sonucu = document.querySelector("#list").appendChild(li);
      soru2Sonucu.textContent = 'Soru 2 Cevabınız: ' + soru2CevapDegeri;
      sonuclarListesi.appendChild(soru2Sonucu);

      const soru3Sonucu = document.querySelector("#list").appendChild(li);
      soru2Sonucu.textContent = 'Soru 3 Cevabınız: ' + soru3CevapDegeri;
      sonuclarListesi.appendChild(soru3Sonucu);

      const sonuclarDiv = document.getElementById('sonuclar');
      sonuclarDiv.innerHTML = '';
      sonuclarDiv.appendChild(sonuclarListesi);

    /*  document.getElementById('sonuclar').innerHTML = '<h2>Soru 1 Cevabınız: ' + soru1CevapDegeri + '</h2>' +
                                                      '<h2>Soru 2 Cevabınız: ' + soru2CevapDegeri + '</h2>' +
                                                      '<h2>Soru 3 Cevabınız: ' + soru3CevapDegeri + '</h2>';

      // Formu sıfırla
     document.getElementById('anketForm').reset();

      alert('Lütfen tüm soruları cevaplayın.');}
*/
      /*     
const soru1Cevap = document.querySelector('input[name="soru1"]:checked');
const soru2Cevap = document.querySelector('input[name="soru2"]:checked');
const soru3Cevap = document.querySelector('input[name="soru3"]:checked');


               function newElement (){

                const  soru1CevapDegeri = soru1Cevap.value;
                const soru2CevapDegeri = soru2Cevap.value;
                const soru3CevapDegeri = soru3Cevap.value;

                console.log(soru1CevapDegeri);
                console.log(soru2CevapDegeri);
                console.log(soru3CevapDegeri);



              }*/
/*
              const radioButtons = document.getElementsByName("A");
              const selectedValueElement = document.getElementById("selectedValue");
            
              // Add event listener to each radio button
              radioButtons.forEach(function (radio) {
                radio.addEventListener("change", function () {
                  if (this.checked) {
                    selectedValueElement.textContent = "Selected Value: " + this.value;
                  }
                });
              });*/


              function btnClick(){


                const radioButtons1 = document.getElementsByName("a");         
                const radioButtons2= document.getElementsByName("b");          
                const radioButtons3 = document.getElementsByName("c");
              
              const selectedValueElement1 = document.getElementById("selectedValue1");
              const selectedValueElement2 = document.getElementById("selectedValue2");
              const selectedValueElement3 = document.getElementById("selectedValue3");
            
              // Add event listener to each radio button
              radioButtons1.forEach(function (radio) {
                radio.addEventListener("change", function () {
                  if (radio.checked) {
                    selectedValueElement1.textContent = "Selected Value: " + radio.value;
                    
                  }
                });
              });

              radioButtons2.forEach(function (radio) {
                radio.addEventListener("change", function () {
                  if (radio.checked) {
                    selectedValueElement2.textContent = "Selected Value: " + radio.value;
                  }
                });
              });

              radioButtons3.forEach(function (radio) {
                radio.addEventListener("change", function () {
                  if (radio.checked) {
                 
                    selectedValueElement3.textContent = "Selected Value: " + radio.value;
                  }
                });
              });
            };
