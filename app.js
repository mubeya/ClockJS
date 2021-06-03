let nameUser = prompt("İsminizi girin : ").toUpperCase();
let nameDOM = document.getElementById("name");

nameDOM.textContent = `Merhaba ${nameUser}, Hoşgeldin!`;


function getToday(){
  
    let dateDOM = document.getElementById("date");
    
    let date = new Date();
    let hour = ('0' + date.getHours()).slice(-2);
    let minutes = ('0' + date.getMinutes()).slice(-2);
    let second = ('0' + date.getSeconds()).slice(-2);
    let options = {weekday: 'long'};
    let today = new Intl.DateTimeFormat('tr-TR', options).format(date);

    dateDOM.textContent = `${hour} : ${minutes} : ${second} , ${today}`;
}


setInterval(getToday , 1000);