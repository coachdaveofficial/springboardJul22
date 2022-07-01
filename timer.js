function countDown(num){
  num--
    let timer = setInterval(function(){
      if (num > 0) {
        console.log(num);
        num--;
      }
      else {
      clearInterval(timer);
      console.log('DONE!');
      }
    }, 1000)
  }

function randomGame() {
    let counter = 0;
    let number;
    let randomNumber = setInterval(function() {
        number = Math.random();
        counter++;
        if (number > 0.75) {
            clearInterval(randomNumber);
            console.log(`it took ${counter} try/tries!`)
        }
    }, 1000)
    
}

//randomGame()
countDown(4);