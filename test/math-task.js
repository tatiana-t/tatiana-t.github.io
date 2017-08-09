var a = a;
var b = b;
var sum;

var itemA = document.querySelector('.item--a');
var itemB = document.querySelector('.item--b');
var itemSum = document.querySelector('.item--sum');

a = 7;
b = 4;
sum = a + b;

itemA.innerHTML = a;
itemB.innerHTML = b;
//itemSum.innerHTML(itemSum);

var graficShow = document.querySelector('.grafic-show');

function createArrowA() {
  var arrow = document.createElement('div');
  arrow.classList.add('arrow');
  graficShow.appendChild(arrow);

  arrow.style.left = 25 + 'px'; // left для первой стрелки = 25px

  arrow.style.width = 28.57 * a + 'px'; // 28.57 - расстояния между соседними делениями на оси

}
createArrowA();

var inputNum = document.createElement('input');

function addInputA() {
  var arrows = document.querySelectorAll('.arrow');
  var i = arrows.length - 1;

  inputNum.classList.add('input-num');

  arrows[i].appendChild(inputNum);

  inputNum.style.left = '45%';
  inputNum.style.top = '-30px';

}
addInputA();
inputNum.onchange = validateInputA;

function validateInputA() {
  if (inputNum.value == a) {
    inputNum.style.border = 'none';
    inputNum.style.color = 'black';
    itemA.style.backgroundColor = 'transparent';
    createArrowB();
  } else {
    inputNum.style.color = 'red';
    itemA.style.backgroundColor = 'orange';
  }
}

function createArrowB() {
  var arrow = document.createElement('div');
  arrow.classList.add('arrow');
  graficShow.appendChild(arrow);

  arrow.style.left = 25 + 28.57 * a + 'px';
  arrow.style.width = 28.57 * b + 'px';
  addInputB();
}

function addInputB() {
  var arrows = document.querySelectorAll('.arrow');
  var i = arrows.length - 1;
  var inputNum = document.createElement('input');
  inputNum.classList.add('input-num');

  arrows[i].appendChild(inputNum);

  inputNum.style.left = '45%';
  inputNum.style.top = '-30px';
  inputNum.onchange = validateInputB;
}

function validateInputB() {
  var inputNum = document.querySelectorAll('input');
  var j = inputNum.length - 1;
  if (inputNum[j].value == b) {
    inputNum[j].style.border = 'none';
    inputNum[j].style.color = 'black';
    itemB.style.backgroundColor = 'transparent';
    result();

  } else {
    inputNum[j].style.color = 'red';
    itemB.style.backgroundColor = 'orange';
  }
}

function result() {
  var inputSum = document.createElement('input');
  inputSum.classList.add('input-num');
  itemSum.innerHTML = '&nbsp;';
  itemSum.appendChild(inputSum);

  inputSum.onchange = validateInputSum;
}
function validateInputSum() {
  var inputSum = document.querySelector('span .input-num');
    if (inputSum.value == a + b) {
      inputSum.style.border = 'none';
      inputSum.style.color = 'black';
      inputSum.style.backgroundColor = 'transparent';
    } else {
      inputSum.style.backgroundColor = 'orange';
    }
  }
/* // attempt 2
var a = a;
var b = b;
var sum;

var itemA = document.querySelector('.item--a');
var itemB = document.querySelector('.item--b');
var itemSum = document.querySelector('.item--sum');

a = 7;
b = 4;
sum = a + b;

itemA.innerHTML = a;
itemB.innerHTML = b;
//itemSum.innerHTML(itemSum);

var inData = [a, b, sum];
var coordX = 0;

for (i = 0; i < inData.length - 1; i++) {

  var graficShow = document.querySelector('.grafic-show');

  function createArrow() {
    var arrow = document.createElement('div');
    arrow.classList.add('arrow');
    graficShow.appendChild(arrow);

    arrow.style.left = 25 + coordX + 'px'; // left для первой стрелки = 25px

    arrow.style.width = 28.57 * inData[i] + 'px'; // 28.57 - расстояния между соседними делениями на оси

  }
  createArrow();
  coordX = coordX + 28.57 * inData[i]; //координата left для следующей стрелки, которая включает ширину всех предыдущих стрелок



  var inputNum = document.createElement('input');

  function addInput() {
    var arrows = document.querySelectorAll('.arrow');
    var i = arrows.length - 1;

    inputNum.classList.add('input-num');

    arrows[i].appendChild(inputNum);

    inputNum.style.left = '45%';
    inputNum.style.top = '-30px';

  }
  addInput();

  var item = document.querySelectorAll('.item');
  
  
  
  // здесь не получилось дождаться ввода данных до продолжения цикла
  function validateInput() {
    while (inputNum.value != inData[i]) {
      
      if (inputNum.value == inData[i]) {
        inputNum.style.border = 'none';
        inputNum.style.color = 'black';
        item[i].style.backgroundColor = 'transparent';
      } else {
        inputNum.style.color = 'red';
        item[i].style.backgroundColor = 'orange';
      };
      
    }
  }
  
 validateInput();

*/