// calculationcard - калькуляция в карточке

var array = document.getElementsByTagName('input');
for (var i = 0; i < array.length; i++) {
    var enik = array[i];
    enik.oninput = function(e) {
        var elem = e.target,
            cardId = elem.getAttribute('data-id'),
            value = elem.valueAsNumber,
            price = parseFloat(document.querySelector('.card[data-id="' + cardId + '"] .rate').textContent),
            totalPrice = (value * price).toFixed(2);

        document.querySelector('.card[data-id="' + cardId + '"] .total_price').textContent = '($' + totalPrice + ')';
    }
    console.log(enik);
}

function pressingbutton(cardId) {
    var value = document.querySelector('.card[data-id="' + cardId + '"] input').valueAsNumber,
        price = parseFloat(document.querySelector('.card[data-id="' + cardId + '"] .rate').textContent),
        name = document.querySelector('.card[data-id="' + cardId + '"] .name').textContent,
        totalPrice = parseFloat((value * price).toFixed(2));

    var elem = {
        name: name,
        price: price,
        count: value,
        totalPrice: totalPrice
    }

    tableAddRow(elem);
}

function tableAddRow(elem) {

    var elem = document.createElement('tr');
    elem.innerHTML = '<td>' + elem.name + '</td><td>' + elem.count + '</td><td>' + elem.totalPrice + '</td><td></td>';


    ttr.appendChild(elem)
}
