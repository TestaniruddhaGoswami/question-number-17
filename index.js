
 var readlineSync = require('readline-sync');
 var username = readlineSync.question('enter the name 1 ');
var username2 = readlineSync.question('enter the name 2 ');
 

var obj1=
{  name: username,
    power: 2500
  
}
var obj2=
{  name: username2,
    power: 2325
  
}
function powerplay (a,b)
  {
    var namecounter =(obj1.name).length;
    var namecounter2 =(obj2.name).length;
    var powercounter1 = obj1.power + namecounter*35;
    console.log(powercounter1);
    var powercounter2 = obj2.power + namecounter2*35 ;
    console.log(powercounter2);
    if (powercounter1>powercounter2){ console.log(obj1.name, " is greater",powercounter1)}
    else console.log(obj2.name, " is greater", powercounter2)
  }
powerplay(obj1,obj2);








 // // //console.log('Hi ' + StringName + '!');
//   var score=0;
// function play(question,answer)
// {
// var useranswer = readlineSync.question(question);

//   // if(useranswer.toLowerCase(useranswer=== answer))
//   // {
//   //   console.log("you are right");
//   //   score++;
//   // }
//   // else {
//   //   console.log("you are wrong")
//   // }

//     if (useranswer.toLowerCase() === answer.toLowerCase())
//     {
//     console.log("Right!"),
//     score++;
//   }else{
//     console.log("Wrong!")
//   }

//   console.log(" your current score :", score);
//   console.log("--------------------------")
// }

// var questionbankarray = [{
//   question:"what is my name",
//   answer:"ag"}, 
//   {question:"what is my age?",
//   answer:"25"},
// {question:"where do i live?",
//   answer:"almora"}]

// for (var i=0;i<questionbankarray.length;i++)
// {
//   var currentquestion = questionbankarray[i];
//   play(currentquestion.question,currentquestion.answer);
//   console.log("you score:  ", score)
// }

                         


