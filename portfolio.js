
window.onload = init;

function init() {

  var btns = document.querySelectorAll('.project__button');
  for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = detailWindow;
  }

}


var portfolioContent = document.querySelector('.portfolio__contacts');

function detailWindow(eventObj) {
  
  var btn = eventObj.target;
  
  console.log('btn attribute is ' + btn.getAttribute('name'));
  
//  var doc= document.querySelector('link[rel="import"]').import;
  
// задаем переменную для тега ссылки импорта, чтобы сформировать путь загружаемого файла
  
  var imp = document.querySelector('link[rel="import"]');
  imp.href = 'projectDetails/' + btn.getAttribute('name') + '.html';
  console.log(imp);
  console.log(imp.href);
  
  // задаем переменную для импортируемого файла 
  var details = document.querySelector('link[rel="import"]').import;
  console.log(details);
  
  //var innerDetails = details.querySelector('.detail');
  //console.log(innerDetails);
  
  //portfolioContent.appendChild.innerDetails.cloneNode(true);
}
