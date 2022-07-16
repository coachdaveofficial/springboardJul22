// 1
const container = document.getElementById('container');
// 2
const newContainer = document.querySelector('#container');
// 3
const secondClass = document.getElementsByClassName('second');
// 4
const ol = document.querySelector('ol');
const olThird = ol.lastElementChild;
// or could use document.querySelector("ol .third")
// 5
//container.innerText = 'Hello!'
// 6
const lastDiv = document.getElementsByClassName('footer');
lastDiv.className += " main";
// 7
let footer = document.querySelector('.footer');
footer.classList.remove('main');
// 8
const newLi = document.createElement("li");
// 9
newLi.innerText = "four";
// 10
const ul = document.querySelector('ul');
ul.append(newLi);
// 11
for (let item of ol.children){
    item.style.backgroundColor = 'green';
};
// 12
footer.remove();
