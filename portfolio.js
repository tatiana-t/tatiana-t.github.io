
window.onload = init;

function init() {

  var btns = document.querySelectorAll('.project__button');
  for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = detailWindow;
  }

}
var imp = document.querySelector('link[rel="import"]');
var portfolioContent = document.querySelector('.portfolio__contacts');

function detailWindow(eventObj) {
  
  var btn = eventObj.target;
  
  console.log('btn attribute is ' + btn.getAttribute('name'));
  
  imp.href = 'projectDetails/' + btn.getAttribute('name') + '.html'; 
  
  imp.getAttribute('href');
  
  var details = document.querySelector('link[rel="import"]').import;
  var innerDetails = details.querySelector('.detail');
  console.log(innerDetails);
  
  portfolioContent.appendChild.(innerDetails.cloneNode(true));
}
