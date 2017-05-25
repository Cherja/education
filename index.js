// calculationcard - калькуляция в карточке

function changeCountInput(elem, cardId) {
  var value = parseInt(elem.value),
    price = parseFloat(document.querySelector('.card[data-id="' + cardId + '"] .rate').textContent),
    totalPrice = (value * price).toFixed(2);
  document.querySelector('.card[data-id="' + cardId + '"] .total_price').textContent = '($' + totalPrice + ')';
}

function pressingbutton(cardId) {

  var obj = {
    soss: '3'
  };
  console.log(obj.soss);



  value = parseInt(document.querySelector('.card[data-id="' + cardId + '"] input').value),
    price = parseFloat(document.querySelector('.card[data-id="' + cardId + '"] .rate').textContent),
    name = document.querySelector('.card[data-id="' + cardId + '"] .name').textContent,
    totalPrice = (value * price).toFixed(2);

  tableAddRow(elem);
}

function tableAddRow(elem) {

  var elem = document.createElement('<tr><td>' + name + '</td><td>' + value + '</td><td>' + totalPrice + '</td></tr>')


  ttr.parentNode.appendChild(elem)
}
