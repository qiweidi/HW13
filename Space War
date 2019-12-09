var downpl;
var bullets = [];
var enemys = [];

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('shot.wav');
  loseSound = loadSound('lose.wav');
}



function setup() {
  createCanvas(600, 400);
  downpl = new Downpl();
  bullet = new Bullet();

  for (var i = 0; i < 25  ; i++) enemys[i] = new Enemy();
}


function draw() {
  background(0);
  downpl.show();



  for (var i = 0; i < enemys.length; i++) {
    enemys[i].show();
    enemys[i].move();
    if (enemys[i].kills(downpl)) {
      textSize(50);
      fill(255);
      text('You lose!!!!', 200, 200);
      noLoop();
      loseSound.play();
    }
  }

  fill(0, 255, 0);


  for (var i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();
    for (var j = 0; j < enemys.length; j++) {
      if (bullets[i].hits(enemys[j])) {
        enemys[j].kill();
        bullets[i].kill();


        console.log("cyka blyat")
      }
    }
  }

  for (var i = bullets.length - 1; i >= 0; i--) {
    if (bullets[i].toDelete) {
      bullets.splice(i, 1);
    }
  }

  for (var i = 0; i < enemys.length; i++) {
    if (enemys[i].toDelete) {
      enemys.splice(i, 1);

    }
  }




  stroke(255);


  if (keyIsDown(37)) {
    downpl.move(-1);
  }
  if (keyIsDown(39)) {
    downpl.move(1);
  }



}


function keyPressed() {
  if (key === ' ') {
    var bullet = new Bullet(downpl.x, height);
    bullets.push(bullet);
    mySound.play();
  }

}
