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
 
  if (detailWin.classList.contains('detail--closed')) {
    detailWin.classList.remove('detail--closed');
    detailWin.classList.add('detail--opened');
  };

  var closeBtn = btn.parentElement.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild;
  closeBtn.onclick = detailClose;


  function detailClose() {

    var detail = btn.parentElement.parentElement.lastElementChild;
    detail.classList.add('detail--closed');
    detail.classList.remove('detail--opened');
  }
}
