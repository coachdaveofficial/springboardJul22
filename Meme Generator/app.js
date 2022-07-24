const topTextInput = document.querySelector('#topText');
const bottomTextInput = document.querySelector('#bottomText');
const memeLink = document.querySelector('#memeLink');
const submitButton = document.querySelector('#memeSubmit');
const container = document.querySelector('div.container');






function createHolder(top, bottom, meme) {
    let memeHolder = document.createElement('div');
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";



    memeHolder.classList.add('holder')
    memeHolder.append(deleteButton);
    memeHolder.append(meme);
    memeHolder.append(top);
    memeHolder.append(bottom);
    container.append(memeHolder);
}


function createMemeImg(memeImgSrc) {
  let newMeme = document.createElement('img')
  newMeme.className = "meme";
  newMeme.src = memeImgSrc;
  
 
  return newMeme;
}

function createTextDiv(classy, divValue){
  let newDiv = document.createElement('div');
  newDiv.className = classy;
  newDiv.innerText = divValue.toUpperCase();
  
  
  return newDiv;
  
}
  

submitButton.addEventListener('click', function(e){
    e.preventDefault();
    
    console.log(e)
    
    if (topTextInput.value !== "" && bottomTextInput.value !== "" && memeLink.value !== "") {
        console.log('all text boxes are filled');
    
        createHolder(
            createTextDiv("top-text", topTextInput.value),
            createTextDiv("bottom-text", bottomTextInput.value),
            createMemeImg(memeLink.value)
            );
    }
    
    topTextInput.value = "";
    bottomTextInput.value = "";
    memeLink.value = "";
  
})

container.addEventListener('click', function(e) {
    if (e.target.type === 'submit') {
        e.target.parentNode.remove();
    }
})



