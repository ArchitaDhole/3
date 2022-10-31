let bullets = [];
let enemies = [];
var score = 0;

function setup() {
  createCanvas(500, 450);

  for (let i = 0; i < 10; i++) {
    let enemy = {
      x: random(0, width),
      y: 0
    }
    enemies.push(enemy);
  }
}

function draw() {
  background(90);
  rectMode(CENTER);
  fill("rgb(13, 43, 82)");
  circle(mouseX, height - 50, 50);

  fill(10);
  noStroke();
  rect(width / 2, 5, width, 10);
  rect(width / 2, height - 5, width, 10);
  rect(5, height / 2, 10, height);
  rect(width - 5, height / 2, 10, height);

  for (let bullet of bullets) {
    bullet.y -= 10;
    fill("rgb(54, 202, 145)")
    circle(bullet.x, bullet.y, 10);
  }

  for (let enemy of enemies) {
    enemy.y += 2;
    fill("rgb(194, 55, 17)");
    circle(enemy.x, enemy.y, 10);
    if(enemy.y > height){
      textSize(40);
      fill("white")
      text("You Lose!", width/2, height/2);
      noLoop();
    }
  }

  for (let enemy of enemies) {
    for (bullet of bullets) {
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10) {
        enemies.splice(enemies.indexOf(enemy), 1);
        bullets.splice(bullets.indexOf(bullet), 1);
        let newEnemy = {
          x: random(0, width),
          y: 0
        }
        enemies.push(newEnemy);
        score += 1;
      }
    }
  }

  fill("white");
  text("Score : " + score, 40, 40);
  textSize(10);

  if (keyDown("SPACE")) {
    showBullets();
  }

  drawSprites();
}


function showBullets() {
  let bullet = {
    x: mouseX,
    y: height - 50  
  }
  bullets.push(bullet);
}