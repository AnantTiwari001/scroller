let canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
console.log(
  "inside the script of whatever man I dont know and neither i wannna  know about it is none of my bussiness and that should be it man I need to go out of the way okay bye"
);
canvas.width = window.innerWidth;
let c = canvas.getContext("2d");

let character = new Image();
character.src = "Download16151.png";
let xGap = 64;
let x = 10;
let y = 40;
//Unit of Y-axis of the sprintsheet is 64
let iCropX = 9;
let iCropY = 13;

let uWalk = 525;
let lWalk = 589;
let dWalk = 653;
let rWalk = 717;

character.addEventListener("load", function () {
  c.drawImage(character, iCropX, iCropY, 45, 50, x, y, 50, 100);
  c.strokeStyle = "red";
  c.strokeRect(x, y, 50, 100);
});
iCropY = rWalk;

document.addEventListener("keydown", frame);
function increaseFrame() {
  iCropX += xGap;
  if (iCropX > 395) {
    iCropX = 9;
  }
}

function frame(e) {
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.strokeStyle = "red";
  console.log(e.key);

  if (e.key === "ArrowRight") {
    if (iCropY != rWalk) {
      iCropY = rWalk;
      iCropX = 9;
    }
    increaseFrame();
    for (let i = 0; i < 4; i++) {
      x += 1;
    }
  } else if (e.key === "ArrowLeft") {
    if (iCropY != lWalk) {
      iCropY = lWalk;
      iCropX = 9;
    }
    increaseFrame();
    for (let i = 0; i < 4; i++) {
      x -= 1;
    }
  } else if (e.key === "ArrowUp") {
    if (iCropY != uWalk) {
      iCropY = uWalk;
      iCropX = 9;
    }
    increaseFrame();
    for (let i = 0; i < 4; i++) {
      y -= 1;
    }
  } else if (e.key === "ArrowDown") {
    if (iCropY != dWalk) {
      iCropY = dWalk;
      iCropX = 9;
    }
    increaseFrame();
    for (let i = 0; i < 4; i++) {
      y += 1;
    }
  }
  c.strokeRect(x, y, 50, 100);
  c.drawImage(character, iCropX, iCropY, 45, 50, x, y, 50, 100);
}

// Controls for mobile devices
function control(direction) {
  if (direction == "right") {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight" }));
  } else if (direction == "left") {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft" }));
  }else if(direction == 'up'){
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp" }));
  }else if(direction == 'down'){
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown" }));
  }
}
