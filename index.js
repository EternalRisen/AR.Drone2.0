'use strict';

var arDrone = require('ar-drone');
var client  = arDrone.createClient();

var keypress = require('keypress');

keypress(process.stdin);
let ground = true
var timeout = null

process.stdin.on('keypress', function (ch, key) {y  
  console.log('got "keypress"', key);
  
  if (key && key.name == 'space') {
      if (ground) {
          client.takeoff();
          console.log('takeoff!');
      } else {
          client.land();
          console.log('land!');   
      } 
    ground = !ground
    return;
  } else if (key && key.name == 'w') {
      client.front(1);
      console.log('going forward!')
  } else if (key && key.ctrl && key.name == 'c') {
        process.exit();
        console.log('killing terminal commands');
  } else if (key && key.name == 's') {
      client.back(1);
      console.log('going backwards!')
  } else if (key && key.name == 'a') {
      client.left(1);
      console.log('going left!')
  } else if (key && key.name == 'd') {
    client.right(1);
    console.log('going right!')
  } else if (key && key.name == 'up') {
    client.up(1);
    console.log('going up!')
  } else if (key && key.name == 'down') {
    client.down(1);
    console.log('going down!')
  } else if (key && key.name == 'right') {
    client.clockwise(1);
    console.log('Making a right!')
  } else if (key && key.name == 'left') {
    client.counterClockwise(1);
    console.log('Making a left!')
  } else if (key && key.name == 'escape') {
    client.stop;
    console.log('stop, escape was pressed')
  } else if (key && key.name == 'j') {
    client.animate('flipLeft', 1000);
    console.log('do a barrel role to the left!')
  } else if (key && key.name == 'l') {
    client.animate('flipRight', 1000);
    console.log('do a barrel role to the right!')
  } else if (key && key.name == 'k') {
    client.animate('flipBehind', 1000);
    console.log('Do a backflip!');
  } else if (key && key.name == 'i') {
    client.animate('flipAhead', 1000);
    console.log('do a frontflip!');
  }
   if (timeout) {
          clearTimeout(timeout);
          timeout = null;
      }
      timeout = setTimeout(() => {
          client.stop()
        console.log('stop!')
        }, 100);

});
 
process.stdin.setRawMode(true);
process.stdin.resume();

