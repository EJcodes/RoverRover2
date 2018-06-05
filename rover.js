var x = 0;
var y = 0;
var past = [x ,y];
var i = 0;
var direction= rover.wayz[0];
var rover ={ wayz:['North', 'West', 'South', 'East'],
position: [x ,y],
}

for( var i = 0; i < 10; i++){
  console.log("Your rover is currently facing " + direction + ", in position " + rover.position);
  var info = prompt("Would you like to turn the rover left / right or move forward?")
  if(info == "left" && direction == rover.wayz[0]){
    console.log("Left turn was called! Your rover is now facing " + rover.wayz[1]);
    direction = rover.wayz[1];


  }else if("right" == info && direction == rover.wayz[0]){
    console.log("Right turn was called your rovers is now facing " + rover.wayz[2]);
    direction = rover.wayz[2];


  }else if(info == "forward" && direction == "North"){
    console.log("Your rover is now  in position" + (x - 1) + ", "+ y);
    x -=1;

  }else if(info == undefined || info == ""){
    i =10;
    console.log("The rover lost signal mission failed. GOOD BYE!");
  }


}

console.log(direction)
/*
function facing(){
var dir = document.getElementById('command');

addEventListener(chk, 'change' , function(e){
  var target = e.target || e.srcElement;
  try {
    if (target.checked){
      command.type = 'text';
    }
  } catch(error){
    alert('This browser cannot switch type');
  }

});
}

*/
