/* eslint-disable no-unused-vars */
'use strict';
let score=0;
let userName=prompt('Whats your name!?');
alert('Welcome '+userName);

function qustBTN(x) {
  switch (x) {
  case '1': {
    let ans1 = prompt('Qusai AGE is 24 ? (YES,Y) , (NO,N)').toUpperCase();
    if (ans1 === 'Y') {
      document.getElementById('one').innerHTML = 'correct';
      score++;
      document.getElementById('score').innerHTML=score;
    }
    
    else if (ans1 === 'YES') {
      document.getElementById('one').innerHTML = 'correct';
      score++;
      document.getElementById('score').innerHTML=score;
    }
    else {
      document.getElementById('one').innerHTML = 'wrong';
    }
    break;
  }
  case '2':
  {
    let ans1 = prompt('The capital of jordan is Irbid ? (YES,Y) , (NO,N)').toUpperCase();
    if (ans1 === 'N') {
      document.getElementById('two').innerHTML = 'correct';
      score++;
      document.getElementById('score').innerHTML=score;
    }
    else if (ans1 === 'NO') {
      document.getElementById('two').innerHTML = 'correct';
      score++;
      document.getElementById('score').innerHTML=score;
    }
    else {
      document.getElementById('two').innerHTML = 'wrong';
    }
    break;

  }

  case '3':
  {
    let ans1 = prompt('Quasi graduated from a university located in alsalt ? (YES,Y) , (NO,N) ').toUpperCase();
    if (ans1 === 'Y') {
      document.getElementById('three').innerHTML = 'correct';
      score++;
      document.getElementById('score').innerHTML=score;
    }
    else if (ans1 === 'YES') {
      document.getElementById('three').innerHTML = 'correct';
      score++;
      document.getElementById('score').innerHTML=score;
    }
    else {
      document.getElementById('three').innerHTML = 'wrong';
    }
    break;

  }

  case '4':
  {
    let ans1 = prompt('He gradueated at Covid-19 year ? (YES,Y) , (NO,N)').toUpperCase();
    if (ans1 === 'Y') {
      document.getElementById('four').innerHTML = 'correct';
      score++;
      document.getElementById('score').innerHTML=score;
    }
    else if (ans1 === 'YES') {
      document.getElementById('four').innerHTML = 'correct';
      score++;
      document.getElementById('score').innerHTML=score;
    }
    else {
      document.getElementById('four').innerHTML = 'wrong';
    }
    break;

  }

  case '5':
  {
    let ans1 = prompt('Android use JAVA and KOTLIN ? (YES,Y) ,(NO,N) ').toUpperCase();
    if (ans1 === 'Y') {
      document.getElementById('five').innerHTML = 'correct';
      score++;
      document.getElementById('score').innerHTML=score;
    }
    else if (ans1 === 'YES') {
      document.getElementById('five').innerHTML = 'correct';
      score++;
      document.getElementById('score').innerHTML=score;
    }
    else {
      document.getElementById('five').innerHTML = 'wrong';
    }
    break;

  }

  }
}
let random=Math.floor(Math.random() * 11);
function gameBTN()
{
  let answer=random;
  let guessCount = 0;
  let userInput;
  console.log(answer);

  do {
    guessCount=guessCount++;
    userInput=Number(prompt('Guess the number Between 0 and 10'));
    console.log(answer);
    if (userInput>answer) {
      console.log('Too high!');
      alert('Too high!');
      alert ('again');
    }
    else if (userInput===answer) {
      console.log('true');
      alert('true');
      score++;
      document.getElementById('score').innerHTML=score;
      break;
    }
    else {
      console.log('Too low!');
      alert('Too low!');
      alert ('again');
    }
    console.log(guessCount);
    guessCount++;
  } while (guessCount < 4);
  alert('random number is '+answer);
}
function gameBTN2()
{
  let movies =['inception','game of thrones','dark knight','the shawshank redemption','lost','hunger game','lucifer','la casa','rick n morty','peaky blinders'];
  let guesses = 6;
  let answer;
  let score=0;

  do{
    answer = prompt('What is ma favorite Movie or series ? you have only 6 Tries\n'+ guesses+" of 6" );

    if (answer.toLowerCase() === movies[0]) {
      alert(answer +'  Correct !');
      score++;
      document.getElementById('score').innerHTML=score;
      break;
    }
    else if (answer.toLowerCase() === movies[1]) {
      alert(answer +' Correct !');
      score++;
      document.getElementById('score').innerHTML=score;
      break;
    }
    else if (answer.toLowerCase() === movies[2]) {
      alert(answer +'  Correct !');
      score++;
      document.getElementById('score').innerHTML=score;
      break;
    }
    else if (answer.toLowerCase() === movies[3]) {
      alert(answer +' Correct !');
      score++;
      document.getElementById('score').innerHTML=score;
      break;
    }
    else if (answer.toLowerCase() === movies[4]) {
      alert(answer +'  Correct !');
      score++;
      document.getElementById('score').innerHTML=score;
      break;
    }
    else if (answer.toLowerCase() === movies[5]) {
      alert(answer +' Correct !');
      score++;
      document.getElementById('score').innerHTML=score;
      break;
    }
    else if (answer.toLowerCase() === movies[6]) {
      alert(answer +'  Correct !');
      score++;
      document.getElementById('score').innerHTML=score;
      break;
    }
    else if (answer.toLowerCase() === movies[7]) {
      alert(answer +' Correct !');
      score++;
      document.getElementById('score').innerHTML=score;
      break;
    }
    else if (answer.toLowerCase() === movies[8]) {
      alert(answer +'  Correct !');
      score++;
      document.getElementById('score').innerHTML=score;
      break;
    }
    else if (answer.toLowerCase() === movies[9]) {
      alert(answer +' Correct !');
      score++;
      document.getElementById('score').innerHTML=score;
      break;
    }

    guesses--;

  }while( guesses > 0 );

  if(guesses === 0){
    alert('My Favorite movies and Series : \n' + movies[1] + ' , ' + movies[2]+ 
    ' , ' + movies[3] + ' , ' + movies[4]+' , '+ movies[5] + ' , ' + movies[6]+
    ' , '+ movies[7] + ' , ' + movies[8]+' , '+ movies[9] );
  }
}
