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

  createtable(elem);
}

function createtable(elem) {

  var elem = document.createElement('<tr><td>' + name + '</td><td>' + value + '</td><td>' + totalPrice + '</td></tr>')


  ttr.parentNode.appendChild(elem)
}
