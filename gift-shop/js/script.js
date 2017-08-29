var menu = document.querySelectorAll('.menu-item');
var help = true;
for (i = 0; i < menu.length - 1; i++) {

  menu[i].addEventListener('click', function () {
    var openMenu = document.querySelector('.menu-item--open');
    
    if (this.classList.contains('menu-item--open')) {
      this.classList.remove('menu-item--open');
      

    } else {

      this.classList.add('menu-item--open');

    }
if (openMenu) {
      openMenu.classList.remove('menu-item--open');
    }

  })
};

//работа меню
//$(document).ready(function () {
//  $(".menu-item").click(function () {
//   // $(".menu-item").removeClass("menu-item--open");
//    $('.menu-item__list').toggle();
//    
//  });
//});


//<script>
//if (document.body.clientWidth>800){
//   document.write("<script>console.log('hello!');<\/script>


var wrap = document.createElement('div'); //обертка для слайдера блока promo на моб версии


var promo = document.querySelector('.promo');
var blockPromo = document.querySelectorAll('.promo__item');

var btnPromo = document.querySelectorAll('.promo__button');

if (promo.clientWidth <= 480) {
  //если ширина < 480 включаем слайдер
  function wrappingPromo() {
    wrap.classList.add('promo__wrap');
    promo.insertBefore(wrap, blockPromo[0]);
    wrapBlocks();
    //добавляем обертку для слайдера, в нее помещаем все элементы
  }
  wrappingPromo();
}

function wrapBlocks() {
  for (i = 0; i < blockPromo.length; i++) {
    wrap.append(blockPromo[i]);

  }
}

btnPromo[0].onclick = prevPromo;
btnPromo[1].onclick = nextPromo;

var position = 0;
var blockWidthPromo = 480;

function nextPromo() {
  if (position == -(blockPromo.length - 1) * blockWidthPromo) {
    position = 0;
  } else {
    position = Math.max(position - blockWidthPromo, -(blockPromo.length - 1) * blockWidthPromo);
  }
  wrap.style.transform = 'translateX(' + position + 'px)'
};

function prevPromo() {

  if (position == 0) {
    position = -(blockPromo.length - 1) * blockWidthPromo;
  } else {
    position = Math.min(position + blockWidthPromo, 0);
  }
  wrap.style.transform = 'translateX(' + position + 'px)'
}

//$('.promo__wrap').on("swipeleft", function () {
//  nextPromo;
//});
//$('.promo__wrap').on("swiperight", function () {
//  prevPromo;
//});
