document.body.classList.add(localStorage.getItem("main_color") || "red");

var colorsList = document.querySelectorAll("#color_switcher li");
var colorListCach = [];
for(var i = 0; i < colorsList.length; i++){
  colorListCach.push(colorsList[i].getAttribute("data-color"));
  colorsList[i].addEventListener('click', function (){
    document.body.classList.remove(...colorListCach);
    document.body.classList.add(this.getAttribute("data-color"));
    localStorage.setItem("main_color", this.getAttribute("data-color"));
  }, false);
}
