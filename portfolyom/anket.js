



              function btnClick(){


                const radioButtons1 = document.getElementsByName("a");         
                const radioButtons2= document.getElementsByName("b");          
                const radioButtons3 = document.getElementsByName("c");
              
              const selectedValueElement1 = document.getElementById("selectedValue1");
              const selectedValueElement2 = document.getElementById("selectedValue2");
              const selectedValueElement3 = document.getElementById("selectedValue3");
            
              // Add event listener to each radio button
              radioButtons1.forEach(function (radio) {

                if (radio.checked) {
                  selectedValueElement1.textContent = "Cevabınız: " + radio.value;
                }
          
            });

            radioButtons2.forEach(function (radio) {

              if (radio.checked) {
                selectedValueElement2.textContent = "Cevabınız: " + radio.value;
              }
        
          });

          radioButtons3.forEach(function (radio) {

            if (radio.checked) {
              selectedValueElement3.textContent = "Cevabınız: " + radio.value;
            }
      
        });
            };
