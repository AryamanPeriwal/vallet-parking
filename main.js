canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

background_image = "parkingLot.jpg";

rover_img="car2.png";
rover_x=5;
rover_y=225;
rover_width=75;
rover_height=100;
function add(){
    background_imagetag=new Image();
    background_imagetag.onload=uploadbackground;
    background_imagetag.src=background_image;

    rover_imagetag=new Image();
    rover_imagetag.onload=uploadrover;
    rover_imagetag.src=rover_img;
}
function uploadbackground() {
    ctx.drawImage(background_imagetag,0 ,0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imagetag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed= e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {                           
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up arrow is pressed, x="+rover_x+",y= "+rover_y);
    uploadbackground()
uploadrover() }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down arrow is pressed, x="+rover_x+",y= "+rover_y);
    uploadbackground()
uploadrover() }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left arrow is pressed, x="+rover_x+",y= "+rover_y);
    uploadbackground()
uploadrover() }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when up arrow is pressed, x="+rover_x+",y= "+rover_y);
    uploadbackground()
uploadrover() }
}

