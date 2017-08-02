window.onload = init;

function init() {
  var btns = document.querySelectorAll('.project__button');
  for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = detailOpen;
  }

}

function detailOpen(eventObj) {

  var btn = eventObj.target;
  var detailWin = btn.parentElement.parentElement.lastElementChild;
  console.log(btn);
  if (detailWin.classList.contains('detail--closed')) {
    detailWin.classList.remove('detail--closed');
    detailWin.classList.add('detail--opened');
  };

  var closeBtn = btn.parentElement.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild;
  console.log(closeBtn);
  closeBtn.onclick = detailClose;


  function detailClose() {
    console.log('start close');

    var detail = btn.parentElement.parentElement.lastElementChild;
    detail.classList.add('detail--closed');
    detail.classList.remove('detail--opened');
    
    console.log('end close');
  }
}
