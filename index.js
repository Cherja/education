var arrayInputs = document.getElementsByTagName('input');
for (var i = 0; i < arrayInputs.length; i++) {
  var enik = arrayInputs[i];
  enik.oninput = function(e) {
    var elem = e.target,
      cardId = elem.getAttribute('data-id'),
      value = elem.valueAsNumber,
      price = parseFloat(document.querySelector('.card[data-id="' + cardId + '"] .rate').textContent),
      totalPrice = (value * price).toFixed(2);

    document.querySelector('.card[data-id="' + cardId + '"] .total_price').textContent = '($' + totalPrice + ')';
  }
}


var arrayButtons = document.getElementsByTagName('button');
for (var i = 0; i < arrayButtons.length; i++) {
  var enik = arrayButtons[i];
  enik.onclick = function(e) {
    var elem = e.target,
      cardId = elem.getAttribute('data-id'),
      value = document.querySelector('.card[data-id="' + cardId + '"] input').valueAsNumber,
      price = parseFloat(document.querySelector('.card[data-id="' + cardId + '"] .rate').textContent),
      name = document.querySelector('.card[data-id="' + cardId + '"] .name').textContent,
      totalPrice = parseFloat((value * price).toFixed(2));

    var elem = {
      cardId: cardId,
      name: name,
      price: price,
      count: value,
      totalPrice: totalPrice
    }

    tableAddRow(elem);
  }
}

function tableAddRow(row) {

  var tr = document.querySelector('#ttr tr[data-id="' + row.cardId + '"]');

  if (tr) {

    return;
  }

  var newNode = document.createElement('tr');

  newNode.setAttribute('data-id', row.cardId)

  newNode.innerHTML = '<td>' + row.name + '</td><td>' + row.count + '</td><td>' + row.totalPrice + '</td><td></td>';

  ttr.appendChild(newNode)
}
