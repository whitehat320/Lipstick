noseX = 0;
noseY = 0;

function preload(){
  clown_nose = loadImage("https://lh3.googleusercontent.com/proxy/o4ShA01imz72jVn1DwGHrXcFhM8NEQWOT7TBD1PUmVeNUDsCm4Jj0RJVgl_1rFC2dqg-s6rIzrvCrONkFkZJJ_4HY9gK8qgfl0zL7zNNY6xL7nmvDbarIHpMLPLG2aotPWyxzMXcXdQENXKPJQwFPf-8GFQgL5JbRBk");
}

function setup(){
  canvas = createCanvas(300 , 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  poseNet =ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded(){
  console.log('PoseNet is initialized');
}

function draw(){
  image(video, 0, 0, 300, 300);
  image(clown_nose, noseX,noseY,30,30);
}

function take_snapshot(){  
  save('myFilterImage.png');    
}


/* SOmeting EXTRA */



var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
  take_snapshot();
} 

/* YOU HAVE REPLACED H3 BY ID = info */


function gotPoses(results){
  if (results.length > 0){
      console.log(results);
      console.log("nose x = " + results[0].pose.nose.x);
      console.log("nose y = " + results[0].pose.nose.y);
      noseX = results[0].pose.lips.x - 5;
      noseY = results[0].pose.lips.y - 5;      
  }
}
