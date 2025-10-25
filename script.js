const imageId = document.getElementById('imageId');
const btn1 = document.getElementById('btn1')
// const btn2 = document.getElementById('btn2')
// var imageId = default.src = "on.png";

let isOn = true;

btn1.addEventListener("click", function() {
  if(isOn) {
    imageId.src = "images/off.png";
    this.textContent = "Off";
    document.body.style.backgroundColor = "#808080";
    document.body.style.color = "#ffff";
  }else {
    imageId.src = "images/on.png"
    this.textContent = "On"
    document.body.style.backgroundColor = "white";
  }

  isOn = !isOn;
})

// btn1.addEventListener("click", function() {
//   imageId.src = "on.png"
// })

// btn2.addEventListener("click", function() {
//   imageId.src = "off.png"
// })