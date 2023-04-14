
const container = document.querySelector('.container');
const count =document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
 //seçtiğimiz divlerin listesini oluşturup hangisini seçtiğimizi bulucaz
const seats = document.querySelectorAll('.seats:not(.reserved)');


container.addEventListener('click', function(e) {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
    e.target.classList.toggle('selected'); // toggle selected varsa siler yoksa ekler
    calculateTotal();
  
}//&&!e.target.classList.contains('reserved')=> rezerve olanlar hariç 
});
    select.addEventListener('change', function(e){
        calculateTotal();   //her film için ücret tekrar hesaplansın istiyoruz
    }) 
      
    
      function calculateTotal(){
        const selectedSeats = container.querySelectorAll('.seat.selected') ; //seçtiğimiz div elemanlarının sayısını istiyoruz
        
        const selectedSeatsArr = [];
        const seatsArr = [];
        /////////////boş liste elemanını doldurmak///////////////////////////////// bu kısmı anlamadım
        selectedSeats.forEach(function(seat){
            selectedSeatsArr.push(seat);
        });

        seats.forEach(function(seat){
            seatsArr.push(seat);
        });

          // localStroge içinde saklayacağımız elemanı buluyoruz
        let selectedSeatIndexs = selectedSeatsArr.map(function(seat){
            return seatsArr.indexOf(seat); //38 elemandan seçilen elemanı gösterir[1,5,7]
        });

         //console.log(selectedSeatIndex)  //elimizde olan listeyi yazdırırz

       // console.log(seats);
        //console.log(selectedSeats);

        let selectedSeatCount = selectedSeats.length; //console.log(selectedSeatCount); //seçili koltuk üzerinden hesap
        count.innerText = selectedSeatCount; 
        amount.innerText = selectedSeatCount * select.value ; // let price = select.value; fiyat bilgisi

        saveToLocalStorage(selectedSeatIndexs); //index numaralarını kaydettik
      }
      
            function getFormLocalStorage(){
              const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')); 
              
              if(selectedSeats != null && selectedSeats.length > 0 ){
                seats.forEach(function(seat, index){
                    if(selectedSeats.indexOf(index) > -1 ){
                        seat.classList.add('selected');
                    }
                })
              }

              const selectedMovieIndex  = localStorage.getItem('selectedMovieIndex');

              if(selectedMovieIndex != null){
                select.selectedIndex = selectedMovieIndex;
              }
            }

        function saveToLocalStorage(indexs){
            localStorage.setItem('selectedSeats', JSON.stringify(indexs));
            localStorage.setItem('selectedMovieIndex', select.selectedIndex);
        }


 




















