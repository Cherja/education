// calculationcard - калькуляция в карточке

function changeCountInput(elem, cardId) {
  value = parseInt(elem.value),
    price = parseFloat(document.querySelector('.card[data-id="' + cardId + '"] .rate').textContent),
    totalPrice = (value * price).toFixed(2);
  document.querySelector('.card[data-id="' + cardId + '"] .total_price').textContent = '($' + totalPrice + ')';
}

function pressingbutton(cardId) {
  // var value = parseInt(document.querySelector('.card[data-id="' + cardId + '"] .totalnymber').textContent),
  //   price = parseFloat(document.querySelector('.card[data-id="' + cardId + '"] .rate').textContent),
  //   totalPrice = (value * price).toFixed(2);
  r = parseFloat(document.querySelector('.card[data-id="' + cardId + '"] .rate').textContent),
    b = (value * r).toFixed(2);
  console.log(b);


}
