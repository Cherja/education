// calculationcard - калькуляция в карточке

function changeCountInput(elem) {
  var value = parseInt(elem.value);
  var price = parseFloat(elem.parentElement.parentElement.parentElement.getElementsByClassName('rate')[0].children[0].textContent);
  var totalPrice = (value * price).toFixed(2);

  elem.parentElement.parentElement.parentElement.getElementsByClassName('total_price')[0].textContent = '($' + totalPrice + ')';
}
