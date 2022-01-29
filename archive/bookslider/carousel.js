function init() {
  var btns = document.querySelectorAll('.slider__arrow');
  var items = document.querySelectorAll('.slider__item');

  var itemWidth = 237,
    carouselPosition = 0,
    itemCount = 1;

  function prev() {
    if (carouselPosition == 0) {
      carouselPosition = -(items.length - 3) * itemWidth;
    } else {
      carouselPosition = (carouselPosition + itemWidth * itemCount), (items.length - 3) * itemWidth;
    }
    slider.style.transform = 'translateX(' + carouselPosition + 'px)';
  };

  function next() {
    if (carouselPosition == -(items.length - 3) * itemWidth) {
      carouselPosition = 0;
    } else {
      carouselPosition = (carouselPosition - itemWidth * itemCount), -(itemWidth * (items.length - 3));
    }

    slider.style.transform = 'translateX(' + carouselPosition + 'px)';
  };

  btns[0].onclick = prev;
  btns[1].onclick = next;

  for (var i = 0; i < items.length; i++) {
    items[i].onclick = select;
    items[i].classList.add(i);
    //добавляются порядковые номера как класс, соответствующие индексу объекта в массиве данных
  };
  var selected = document.getElementById('selected'); //таблица
  var selectedMain = selected.querySelector('.table__main'); //боди таблицы, куда добавляются строки с выбранными книгами


  var id, name, cost, tr; //переменные для раздела таблицы "ИТОГО"

  function select(evt) {
    // выбор книги
    if (this.classList.contains('sd')) {
      //если уже была выбрана
      this.classList.remove('sd');
      this.style.backgroundColor = '#fff';
      this.lastElementChild.innerHTML = 'Купить';
      removeSelected(evt);
    } else {
      //если еще не выбрана, добавляется цвет, меняется текст на кнопке, создается значение id из номеров добавленных в класс, добавляеся класс 'sd' (сокр от selected), чтобы пометить, что книга выбрана.
      this.style.backgroundColor = 'rgb(162, 230, 226)';
      this.lastElementChild.innerHTML = 'Отменить';
      id = this.classList.value;
      id = id.charAt(id.length - 2) + id.charAt(id.length - 1); //для значения id берутся два последних символа, так как количество товаров не превышает двузначного числа
      id = +id;
      
      //вызывается функция отображения выбранной позиции в таблице
      displaySelected();
      this.classList.add('sd');
    }
  }
  // создаются и помещаются в боди таблицы строка и две ячейки для названия книги и цены
  function displaySelected() {
    tr = document.createElement('tr');
    tr.setAttribute('id', id);
    //строкам таблицы добавляются id, соответствующие индексу объекта(книги) в массиве данных (берется из класса, куда были добавлены при создании карточек товара)

    name = document.createElement('td');
    name.setAttribute('class', 'table__name');

    cost = document.createElement('td');
    cost.setAttribute('class', 'table__cost');

    tr.appendChild(name);
    tr.appendChild(cost);
    selectedMain.appendChild(tr);

    innerData(); //добавление данных в таблицу
    isEmpty(); //проверка не пуста ли таблица
    summary(); //подсчет итоговых стоимости и скидки
  }

  function isEmpty() {
    //проверка не пуста ли таблица
    if (selectedMain.childNodes.length !== 0) {
      selected.style.display = 'block';
    } else {
      selected.style.display = 'none';
    }
  }
  //заполяются данные - название книги и ее цена
  function innerData() {
    name.innerHTML = file[id].name;

    //цена с учетом скидки
    if (file[id].typediscount == 'F') {
      cost.innerHTML = (file[id].price - file[id].discount).toFixed(2) + 'руб.';
    } else {
      cost.innerHTML = (file[id].price * (100 - file[id].discount) / 100).toFixed(2) + 'руб.';
    }

  }


  //итоговые стоимость и скидка
  function summary() {
    var sumCostCell = document.getElementById('sum-cost');
    var sumDiscountCell = document.getElementById('sum-discount');
    var sumNoDiscountCell = document.getElementById('sum-no-discount');


    var selectedItems = selectedMain.querySelectorAll('tr');
    var sumCost = 0;
    var discount = 0;
    var cost = 0;
    var sumNoDiscount = 0;

    var selectedId = [];
    //массив с id строк

    for (var i = 0; i < selectedItems.length; i++) {
      selectedId[i] = parseInt(selectedItems[i].getAttribute('id'));

      //рассчет цены и скидки
      if (file[selectedId[i]].discount) {
        if (file[selectedId[i]].typediscount == 'F') {
          cost = file[selectedId[i]].price - file[selectedId[i]].discount;
          discount = +discount + (+file[selectedId[i]].discount);
        } else {
          cost = +(file[selectedId[i]].price * (100 - file[selectedId[i]].discount) / 100).toFixed(2);
          discount = +discount + (file[selectedId[i]].price - cost);

        }
      } else {
        cost = +file[selectedId[i]].price
        discount = +discount + 0;


      }

      discount = discount.toFixed(2);
      sumNoDiscount = (+sumNoDiscount) + (+file[selectedId[i]].price);
      sumNoDiscount = sumNoDiscount.toFixed(2);
      sumCost = +sumCost + cost;
      sumCost = sumCost.toFixed(2);


    }

    sumCostCell.innerHTML = sumCost;
    sumDiscountCell.innerHTML = discount;
    sumNoDiscountCell.innerHTML = sumNoDiscount;
  }


  function removeSelected(evt) {
    //удаление выбранных книг
    var item = evt.target.parentElement.classList.value;
    var id = item.charAt(item.length - 2) + item.charAt(item.length - 1);
    id = +id;
    var tr = selectedMain.querySelectorAll('tr');

    //для каждой строки в боди таблицы сравнивается её id (переменная selectedItem) и id товара, который был источником события отмены (номер, записанный в класс), при совпадении значение удаляется строка
    for (var i = 0; i < tr.length; i++) {
      var selectedItem = tr[i];
      selectedItem = +selectedItem.getAttribute('id');
      if (id == selectedItem) {
        selectedMain.removeChild(tr[i]);
      } else {
        continue
      }
    }
    isEmpty(); //проверка не пуста ли таблица
    summary(); //пересчет итоговых стоимости и скидки
  }
}


setTimeout(init, 500); //выполнение кода отклажывается на 0/5 секунды, чтобы успел создаться слайдер с товарами
