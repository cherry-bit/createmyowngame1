var bg,bgImg,char,characterImage,invisibleGround,obsGroup,o1,o2,o3,v1,v2
function preload(){
bgImg=loadImage("images/bg.jpg");
characterImage=loadAnimation("images/running man 1.png","images/running man 2.png","images/running man 3.png");
o1=loadImage("images/OIP (1).jpg")
o2=loadImage("images/OIP (2).jpg")
o3=loadImage("images/OIP (4).jpg")
v1=loadImage("images/virus1.png")
v2=loadImage("images/virus2.png")
}



function setup(){
createCanvas(1200,600)
bg= createSprite(600,300,1800,800);
bg.addImage(bgImg)
bg.scale=1.5
bg.velocityX=-2;
char=createSprite(75,475,50,50);
char.addAnimation("running",characterImage);
char.scale=0.6
invisibleGround=createSprite(600,575,1200,10);
invisibleGround.visible=false;
obsGroup=createGroup();
}




function draw(){
    background("lightgreen")
    drawSprites();
    if(bg.x<230){
        bg.x=600
    }
    
    if(keyDown("space")){
        char.velocityY=-8;
    }
    char.velocityY+=0.5;
    char.collide(invisibleGround);
    obstacles()
}
function obstacles(){
    if(frameCount%60===0){
        var obs=createSprite(1200,550,20,20);
        obs.velocityX=-3;
        obs.lifetime=400;
        obsGroup.add(obs);
    }

}