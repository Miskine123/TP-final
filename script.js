const interval = setInterval(function () {
  
 
var dateTime = new Date ();
var formattedDateTime = dateTime.toLocaleDateString () + "<br>" + dateTime.toLocaleTimeString ()

var divObject = document.getElementById ( "DatetimeValue");
divObject.innerHTML = formattedDateTime;
 

  }, 500);

  window.onload = function(){
    var dateTime = new Date ();
    var formattedDateTime = dateTime.toLocaleDateString () + "<br>" + dateTime.toLocaleTimeString ()
    
    var divObject = document.getElementById ( "Datetimestamp");
    divObject.innerHTML = formattedDateTime; 
  }
 let options={
   root: null,
   rootMargin:"0px",
   threshold:1.0

 };
 let callback = (entries, observer)=>{
   entries.forEach(entry => {
if (entry.target.id == 'myVideo'){

  if(entry.isIntersecting){
    entry.target.play();
  }

  else{
    entry.target.pause();
  }
}

   });


}
let observer = new IntersectionObserver(callback, option);{
observer.observe(document.querySelector('#myVideo'));
}
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


























 