//kullanıcı bilgisi olşturma
let Name = prompt ("Kullanıcı Adınızı Giriniz")
       let işlemek = document.querySelector("#Name")
       işlemek.innerHTML=(Name)

//saat verisi oluşturma
let div = document.querySelector("#NowClock"); 
function Time(){  
  var now = new Date()  
  var hour=now.getHours() 
  var minute=now.getMinutes() 
  var second=now.getSeconds() 
  var day = now.getDay() 

  let gunTutucu= ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

  div.innerHTML= `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${gunTutucu[day]}` ; 
}
setInterval(Time,1000);
      


 