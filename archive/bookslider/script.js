var file;
var slider = document.querySelector('.slider');


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    file = JSON.parse(this.responseText);
    appear.createItem(file);
  }

}
xhr.open('GET', 'test.json', true);
xhr.send();


var appear = {
  createClass: function (element) {
    if (element == 'img') {
      return 'slider__pic';
    } else if (element == 'name') {
      return 'slider__title';
    } else if (element == 'author') {
      return 'slider__author';
    } else if (element == 'price') {
      return 'slider__price';
    } else if (element == 'discount') {
      return 'slider__discount';
    } else if (element == 'button') {
      return 'slider__button';
    }

  },
  createItem: function (file) {
    var item;

    var img, name, author, price, discount, button;
    for (var i = 0; i < file.length; i++) {

      item = document.createElement('div');
      item.classList.add('slider__item');
      slider.appendChild(item);

      //img = document.createElement('img');
      //img.classList.add('slider__pic');

      //item.appendChild(img);



      function createElement(element, tag) {

        element = document.createElement(element);
        element.classList.add(appear.createClass(tag));
        item.appendChild(element);

        appear.insertData(file, element, tag, i)
        return element;
      }

      img = createElement('img', 'img');
      name = createElement('h3', 'name');
      author = createElement('span', 'author');
      price = createElement('span', 'price');
      discount = createElement('span', 'discount');
      button = createElement('button', 'button');

      //      appear.insertData(file, img, 'img', i);
      //      appear.insertData(file, name, 'name', i);
      //      appear.insertData(file, author, 'author', i);
      //      appear.insertData(file, price, 'price', i);
      //      appear.insertData(file, discount, 'discount', i);
      //      appear.insertData(file, button, 'button', i);
    }


  },

  insertData: function (data, element, tag, i) {
    if (tag == 'img') {
      element.src = data[i].picture;
    } else if (tag == 'name') {
      element.innerHTML = data[i].name;
    } else if (tag == 'author') {
      if (data[i].author) {
        element.innerHTML = data[i].author.last + ' ' + data[i].author.first;
      }
    } else if (tag == 'price') {
      element.innerHTML = 'Цена: ' + data[i].price + 'руб.';
    } else if (tag == 'discount') {
      if (data[i].discount) {
        if (data[i].typediscount == 'F') {
          element.innerHTML = 'Скидка: ' + data[i].discount + 'руб.';
        } else {
          element.innerHTML = 'Скидка: ' + data[i].discount + '%';
        }
      }
    } else if (tag == 'button') {
      element.innerHTML = 'Купить';
    }


  }

};
