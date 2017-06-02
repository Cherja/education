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
    var
      tdCount = tr.querySelector('.row_count'),
      tdPrice = tr.querySelector('.row_totalPrice'),

      currentCount = parseInt(tdCount.textContent),
      currentPrice = parseFloat(tdPrice.textContent);

    tdCount.textContent = currentCount + row.count;
    tdPrice.textContent = parseFloat((currentPrice + row.totalPrice).toFixed(2));

    return;
  }

  var newNode = document.createElement('tr');

  newNode.setAttribute('data-id', row.cardId)

  newNode.innerHTML = '<td>' + row.name + '</td>' +
    '<td class="row_count">' + row.count + '</td>' +
    '<td class="row_totalPrice">' + row.totalPrice + '</td>' +
    '<button class="deleteRow">' + '<i class="fa fa-hand-scissors-o" aria-hidden="true"></i> ' + '</button>';






  ttr.appendChild(newNode)

}
