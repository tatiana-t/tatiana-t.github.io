var navItem = document.querySelectorAll('.nav__item');
var content = document.querySelectorAll('.main__content');


for (var i = 0; i < navItem.length; i++) {

  navItem[i].classList.add(i);
  navItem[i].addEventListener('click', showMap);

};
selectRegion();
var item;

function showMap(e) {
  var itemNew = this.className;
  if (item !== itemNew) {

    for (var i = 0; i < content.length; i++) {
      navItem[i].classList.remove('nav__item--active');
      content[i].classList.remove('main__content--active');
    }
    item = this.className;
    item = item.charAt(item.length - 1);
  }


  content[item].classList.add('main__content--active');
  item = e.target.classList.add('nav__item--active');




  selectRegion();

};
var continent;
var mapRegion;
var region;

function selectRegion() {
  continent = document.querySelector('.main__content--active');
  mapRegion = continent.querySelectorAll('.map__region');
  for (var i = 0; i < mapRegion.length; i++) {
    mapRegion[i].classList.add(i);
    mapRegion[i].addEventListener('click', showCities);
  }
}


var selectedRegion;

function showCities(e) {
  var activeRegion = this.getAttribute('class');
  if (activeRegion !== selectedRegion) {
    for (var i = 0; i < mapRegion.length; i++) {
    mapRegion[i].classList.remove('map__region--active');
  }
  }
  selectedRegion = this.getAttribute('class');
  selectedRegion = +selectedRegion.charAt(selectedRegion.length - 1);
  
  this.classList.add('map__region--active');

  activeRegion = selectedRegion;

  showRegion(selectedRegion);

};



function showRegion(item) {
  
  region = continent.querySelectorAll('.description');
  for (var i = 0; i < region.length; i++) {
    region[i].classList.remove('description--active');
  }

  region[item].classList.add('description--active');
}
