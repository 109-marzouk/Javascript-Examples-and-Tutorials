var counter = document.getElementById("counter");
document.getElementById("text_input").oninput = function (){
  document.getElementById("counter").innerHTML = document.getElementById("text_input").getAttribute("maxlength") - this.value.length;
}
