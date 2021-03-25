// console.log('app');

// //Create
// var todos = ['운동']
// var todo = '게임'
// todos.push(todo)
// console.log(todos)

// //todos = ['운동', '게임']
// //Read
// //함수 선언
// var f1 = function(params){
//     return params;
// }

// function f2(params){
//     return params;
// }


// todos.forEach(function(each){
//     console.log(each)
// })

// todos.forEach(todo=> {
//     console.log(todo)
// })
// //결과 >> '운동' '게임'

// //Update

// var todos = ['운동', '게임'];
// var updateTodo = '게임';
// var updateIndex = todos.findIndex(function(todo) {
//   return todo === updateTodo;
// });
// todos[updateIndex] = '공부';
// console.log(todos);

// var todos = ['운동', '게임'];
// var updateTodo = '게임';

// //새운 배열로 반환
// var newTodos = todos.map(function(todo) {
//   if (todo === updateTodo) {
//     return '공부';
//   }
//   return todo;
// });

// console.log(newTodos);

// //Delete
// var todos = ['운동', '공부', '목욕'];
// var deleteTodo = '공부';
// var deleteIndex = todos.findIndex(function(todo) {
//   return todo === deleteTodo;
// });
// todos.splice(deleteIndex, 1);
// console.log(todos);

// var todos = ['운동', '공부'];
// var deleteTodo = '공부';
// var newTodos = todos.filter(function(toods) {
//   return todo !== delteTodo;
// });
// console.log(newTodo);

// // 값 value
// var a = 1;
// var b = a;
// b = 2;
// console.log(a, b);

// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a, b);

// // 참조 reference
// var a = { x: 1 };
// var b = a;
// b.x = 2;
// console.log(a, b);
// //call by value
// function byValue(count) {
//   count = count + 2;
// }
// var count = 3;
// byValue(count);
// console.log(count); //3

// //call by reference
// function byReference(count) {
//   count.push('2');
// }
// var count = ['1'];
// byReference(count);
// console.log(count); // ["1","2"]

// if (isMan) {
//     // 표현식이 true일경우 블럭 코드 실행
//     console.log('난 남자');
//   } else {
//     console.log('난 여자인가?');
//   }
  
//   var gender = isMan ? '남자' : '여자'; // 삼항 연산자

//   for (var count = 0; count < 5; count++) {
    
//   }
  
//   var obj = { a: 1, b: 2 };
  
  
//   for (var prop in obj) {
//     console.log(prop, obj[prop]);
//   }

//   var isClosed = true;
// while (isClosed) {
//   //반복코드

//   //false로 만들어서 루프종료
//   isClosed = false;

//   //루프종료
//   break;
// }

// function sum(x) {
//     var y = 1;
//     return x + y; //return 문이 없을경우 undefined반환
//   }
  
//   var sum = function() {
//     var y = 1;
//     return x + y;
//   };

// var nick = 'aji'; //전역변수

// function test() {
//   var age = 30; //지역변수
//   console.log(nick, age);
// }

// test();
// console.log(age);

// alert('alert');

// var who = prompt('당신은 누구세요?');

// console.log(who);

// var isDelete = confirm('정말 삭제합니까?');

// console.log(isDelete); 

// function test() {
//     console.log('test()');
// }
  
// var id = setTimeout(test, 1000); //1초후 1번실행
  
// var id = setInterval(test, 1000); //1초마다 계속 실행
  
// //setInterval 보다 나은 방법
// function test() {
// console.log('test()');
// setTimeout(test, 1000);
// }

// function sum(x, y) {
// if (!y) y = 1;
// console.log(x + y);
// }
// sum(3);

// function sum() {
// var size = 0;
// for (var i = 0; i < arguments.length; i++) {
//     size += arguments[i];
// }

// console.log(size);
// }

// sum(1, 2, 3, 4, 5, 6, 7);

// var text = 'abc def ghi jkl abc def'; // 대상 문자열
// var testReg = /abc/; // 찾을 문자열
// var result = testReg.test(text);

// console.log(result);

// var gugu = function(){
//   for(var a=1; a<10; a++){
//     for(var b=1; b<10; b++){
//       console.log(a*b);
//     }
//     console.log('\n');
//   }
// }

// var a={
//   a: 'a',
//   f: function(){
//     console.log('f');
//   }
// }


function a(){
  var sum = 0;
  while(1){
    var num = prompt('더할숫자를입력하세요');
    if(num === null) break;
    sum += parseInt(num);
  }
  alert('숫자의 총합은: '+sum);
}

a();