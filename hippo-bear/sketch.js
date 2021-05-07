function draw() {
  background(0);
  //Draw the video
  image(flippedVideo, 0, 0);
  
  //Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  
  if(label=='bear') {
    document.getElementById("hi").innerHTML="곰이네요 ^^ 반가워요";
    text(label, width /2, height -4);
  } else if(label=='hippo') {
    document.getElementById("hi").innerHTML="하마네요^^ 반가워요";
    text(label, width / 2, height -4);
  } else {
    document,getElementById("hi").innerHTML="다들 어디?";
    text(label, width / 2, height -4);
  }
}