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

  for (var i = 0; i < items.length - 1; i++) {
    items[i].onclick = select;
    items[i].classList.add(i);
  };
  var selected = document.getElementById('selected');
  var selectedMain = selected.querySelector('.table__main');


  var id, name, cost, tr;

  function select(evt) {
    if (this.classList.contains('sd')) {
      this.classList.remove('sd');
      this.style.backgroundColor = '#fff';
      this.lastElementChild.innerHTML = 'Купить';
      removeSelected(evt);
    } else {
      this.style.backgroundColor = 'rgb(162, 230, 226)';
      this.lastElementChild.innerHTML = 'Отменить';
      id = this.classList.value;
      id = id.charAt(id.length - 1);

      displaySelected();
      this.classList.add('sd');
    }
  }
  // создаются и помещаются в боди таблицы строка и две ячейки для названия книги и цены
  function displaySelected() {
    tr = document.createElement('tr');
    tr.setAttribute('id', id);

    name = document.createElement('td');
    name.setAttribute('class', 'table__name');

    cost = document.createElement('td');
    cost.setAttribute('class', 'table__cost');

    tr.appendChild(name);
    tr.appendChild(cost);
    selectedMain.appendChild(tr);

    innerData();
    
    if (selectedMain.childNodes.length !== 0) {
      selected.style.display = 'block';
      
      //console.log(selectedMain.childNodes);
    }
    summary();
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
  
  

  function summary() {
    var sumCostCell = document.getElementById('sum-cost');
    var sumDiscountCell = document.getElementById('sum-discount');
    var sumNoDiscountCell = document.getElementById('sum-no-discount');


var selectedItems = selectedMain.querySelectorAll('tr');
    var sumCost = 0;
    var discount = 0;
    var cost = 0;
    var sumNoDiscount = 0;
    //создается массив с id строк, которые совпадают с порядковым номером товара (индексом массива) в файле с данными
    var selectedId = [];
    for (var i = 0; i < selectedItems.length; i++) {
      selectedId[i] = parseInt(selectedItems[i].getAttribute('id'));

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

    var item = evt.target.parentElement.classList.value;
    var id = item.charAt(item.length - 1);
    id = +id;
    var tr = selectedMain.querySelectorAll('tr');
    for (var i = 0; i < tr.length; i++) {

      var selectedItem = tr[i];
      selectedItem = +selectedItem.getAttribute('id');
      if (id == selectedItem) {
        selectedMain.removeChild(tr[i]);
        } else {
        continue
      }
    }
summary();
  }
}




setTimeout(init, 500);
