// calculationcard - калькуляция в карточке

function changeCountInput(elem, cardId) {
  var value = parseInt(elem.value),
    price = parseFloat(document.querySelector('.card[data-id="' + cardId + '"] .rate').textContent),
    totalPrice = (value * price).toFixed(2);

  document.querySelector('.card[data-id="' + cardId + '"] .total_price').textContent = '($' + totalPrice + ')';
}
