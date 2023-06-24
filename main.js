song="";

function preload () 
{
    song=loadSound("Dancin.mp3");
}

scoreRightWrist=0;
scoreLeftWrist=0;

rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;

function setup ()
{
    canvas=createCanvas(600,500);
    convas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded ()
{
    console.log("poseNet esta inicializado");
}

function gotPoses (results)
{
if(results.lenght >0)
{
    scoreRightWrist=results[0].pose.keypoints[10].score;
    scoreLeftWrist=results[0].pose.keypoints[9].score;
    console.log("scorerightWrist= "+ scoreRightWrist+" scoreleftWrist= "+scoreLeftWrist);

    rightWristX = results[0].pose.rightWrist.x;
     rightWristY = results[0].pose.rightWrist.y;
      console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
      
}
}