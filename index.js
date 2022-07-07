let canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
console.log(
  "inside the script of whatever man I dont know and neither i wannna  know about it is none of my bussiness and that should be it man I need to go out of the way okay bye"
);
canvas.width = window.innerWidth;
let c = canvas.getContext("2d");

let character = new Image();
character.src = "Download16151.png";
let x = 410;
let y = 40;
let iCropX = 9;
let iCropY = 13;
let rWalk = 717;

character.addEventListener("load", function () {
  // c.drawImage(character,10,10, 30,30, 150, 150)
  // drawImage(image, sx, sy, sWidth, sHeight, x, y, Width, Height)
  c.drawImage(character, iCropX, iCropY, 45, 50, x, y, 50, 100);
  c.strokeStyle = "red";
  c.strokeRect(x, y, 50, 100);
});
iCropY = rWalk;

// let btn= document.getElementById('btn');
document.addEventListener("keydown", frame);

function frame(e) {
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.strokeStyle = "red";
  //   console.log(e)
  // console.log('The btn is clicked here and this means that the thing is working here okay bye!')
  if (e.key !== "y") {
    console.log(e.key);
    iCropX += 64;
    // x += 8;
    for (let i = 0; i < 4; i++) {
        x+=1;
    }
    if (iCropX > 395) {
      iCropX = 9;
    }
  } else {
    iCropY += 1;
  }
  c.strokeRect(x, y, 50, 100);
  c.drawImage(character, iCropX, iCropY, 45, 50, x, y, 50, 100);
}
