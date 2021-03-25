// console.log(window.outerWidth);

// console.log(window.name);

// window.open('http://www.daum.net');

// window.opener

// window.close();

// location.href = 'http://www.daum.net'

// location.reload();

// console.log(document.getElementById('debug'));

// var box = document.querySelector('.box');
// console.log(box);

// var box2 = document.querySelectorAll('.box');
// console.log(box2);

// var div = document.createElement('div');

// div.style.border = "1px solid #000";
// div.innerHTML = "hello"
// document.body.appendChild(div);

// const span = document.createElement('span');
// const textNode = document.createTextNode('hello!'); 
// span.appendChild(textNode);
// document.querySelector('#debug').appendChild(span);

// var div = document.getElementById('debug');

// div.remove();

// const list = document.getElementById('list'); 
// list.removeChild(list.children[0]);

document.body.addEventListener('click', function(){
  console.log('click');
})