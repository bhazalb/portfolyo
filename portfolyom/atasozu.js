  /*  https://sozluk.gov.tr/atasozu   */
/*
  fetch('https://sozluk.gov.tr/atasozu ')
  .then(gelen => gelen.json())
  .then(veri => console.log(veri))*/

   const sonuc = document.getElementById("sonuc");
   const aramaKutusu = document.getElementById("aramaKutusu");
   const aramaListesi = document.getElementById("aramaListesi");

   const anahtarKelime =[];
   const deyimlerSoz=[];



  veriYukle();

  async function veriYukle(){
    const sunucuYaniti = await fetch('https://sozluk.gov.tr/atasozu ');
    let veriler = await sunucuYaniti.json();
    

    veriler.forEach(eleman => {
        anahtarKelime.push(eleman.anahtar);
        deyimlerSoz.push(eleman.sozum);
    });

    

    const birlesmisKelime=[...new Set(anahtarKelime)];
    

birlesmisKelime.sort(() => Math.random() - 0.5);

    birlesmisKelime.forEach(kelime=> {
        const yeniOneri = document.createElement("option");
        aramaListesi.appendChild(yeniOneri);
        yeniOneri.value=kelime;


    })
  }

  aramaKutusu.addEventListener("input" , (e) => sonucFiltrele(e.target.value));

  function sonucFiltrele(arananKelime){
     sonuc.innerHTML="";
     const aramaKriteri = new RegExp(arananKelime , "gi");  //arama kriteri için regexp
     let eslesenler = deyimlerSoz.filter(soz => aramaKriteri.test(soz)); //girilen sözler aramamla uyuşuyor mu diye test ettim

    if(arananKelime.length <3){
      eslesenler=[];
    }

     eslesenler.forEach(es => {
       const  siradakiSonuc =document.createElement("li");
       sonuc.appendChild(siradakiSonuc);
       siradakiSonuc.innerHTML=es;
     });
  }