var x = 0;
var y = 0;
var past = [x ,y];

var rover ={ wayz:["North", "West", "South", "East"],
position: [x ,y]
}

var direction= rover.wayz[0];



for( var i = 0; i < 10; i++){
  var reset = prompt("Would you like to take a out another rover?")
  var info = prompt("Would you like to turn the rover left / right or move forward?")
  console.log("Your rover is currently facing " + direction + ", in position " + rover.position);

// This function should allow the user to give a loop of 10 commands to the rover before topping.
// The next four functions are to excute all the left turn outcomes for direction.(north,south,east,west)
  if(info == "left" && direction == rover.wayz[0]){
    console.log("Left turn was called! Your rover is now facing " + rover.wayz[1]);
    direction = rover.wayz[1];
  }else if("left" == info && direction == rover.wayz[1]){
    console.log("Left turn was called your rovers is now facing " + rover.wayz[2]);
    direction = rover.wayz[2];
  }else if("left" == info && direction == rover.wayz[2]){
    console.log("Left turn was called your rovers is now facing " + rover.wayz[3]);
    direction = rover.wayz[3];
  }else if("left" == info && direction == rover.wayz[3]){
    console.log("Left turn was called your rovers is now facing " + rover.wayz[0]);
    direction = rover.wayz[0];
// The next four functions are to excute all the Right turn outcomes for direction.(north,south,east,west)
  }else if("right" == info && direction == rover.wayz[0]){
    console.log("Right turn was called your rovers is now facing " + rover.wayz[3]);
    direction = rover.wayz[3];
  }else if("right" == info && direction == rover.wayz[3]){
    console.log("Right turn was called your rovers is now facing " + rover.wayz[2]);
    direction = rover.wayz[2];
  }else if("right" == info && direction == rover.wayz[2]){
    console.log("Right turn was called your rovers is now facing " + rover.wayz[1]);
    direction = rover.wayz[1];
  }else if("right" == info && direction == rover.wayz[1]){
    console.log("Right turn was called your rovers is now facing " + rover.wayz[0]);
    direction = rover.wayz[0];
// The next four functions are to excute all the forward command outcome and change to x and y cordinate.
// x and y should be changing its value by an amount of 1 or -1
  }else if(info == "forward" && direction == "North"){
    console.log("Forward movement was called! Your rover is now facing " + direction + " in position " + (x - 1) + ", "+ y);
    x = x-1;
  }else if(info == "forward" && direction == "West"){
    console.log("Forward movement was called! Your rover is now facing " + direction + " in position " + x + ", " + (y - 1));
    y = y-1;

  }else if(info == "forward" && direction == "South"){
    console.log(" Forward movement was called! Your rover is now facing " + direction + position + (x + 1) + ", "+ y);
    x = x+1;
  }else if(info == "forward" && direction == "East"){
    console.log("Forward movement was called! Your rover is now facing " + direction + " in position " + x + ", " + (y + 1));
    y = y+1;

  }else if(info == undefined || info == ""){
      i =10;
      console.log("The rover lost signal mission failed. GOOD BYE!");
  }else if(x < 0 || y < 0){

    i =10;
    console.log("Rover is out of range of signal we have lost the rover for 12 hours" + reset)

  }else if(reset == "" || reset == "no"){

    i =10;
    console.log("Rover is out of range of our signal we have lost this rover for 12 hours" + reset)
  }else if(reset == null || reset != yes){
    i =10;
    console.log("Rover is out of range of our signal we have lost this rover for 12 hours" + reset)
  }else if(reset == yes){
    i=0;
  }
}
