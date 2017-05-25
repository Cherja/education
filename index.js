// calculationcard - калькуляция в карточке

function changeCountInput(elem, cardId) {
  var value = parseInt(elem.value),
    price = parseFloat(document.querySelector('.card[data-id="' + cardId + '"] .rate').textContent),
    totalPrice = (value * price).toFixed(2);
  document.querySelector('.card[data-id="' + cardId + '"] .total_price').textContent = '($' + totalPrice + ')';
}

function pressingbutton(cardId) {
  var value = parseInt(document.querySelector('.card[data-id="' + cardId + '"] input').value),
    price = parseFloat(document.querySelector('.card[data-id="' + cardId + '"] .rate').textContent),
    name = document.querySelector('.card[data-id="' + cardId + '"] .name').textContent,
    totalPrice = (value * price).toFixed(2);

  var elem = {
    name: name,
    price: price,
    count: value,
    totalPrice: totalPrice
  }

  tableAddRow(elem);
}

function tableAddRow(row) {

  var elem = document.createElement('tr');
  elem.innerHTML = '<td>' + row.name + '</td><td>' + row.count + '</td><td>' + row.totalPrice + '</td><td></td>';


  ttr.appendChild(elem)
}
