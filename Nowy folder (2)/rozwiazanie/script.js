function formularz(){
  
        let imie = document.getElementById("imie").value
        let nazwisko = document.getElementById("nazwisko").value
        let mail = document.getElementById("mail").value.toLowerCase();   
        let lista = document.getElementById("lista");
       let wynik = document.getElementById("wynik");
       wynik.innerHTML = imie  + " " + nazwisko + "<br>" + mail + "<br>" + lista.value;

    

}



