// 1.Проверка на Enter и отключение ввода букв.
code.onkeypress = function(e) {
  var charCode = e.charCode;

  if (charCode == 13) {
    saveCode(code.value);
    clearInput();
  }
  if (charCode >= 48 && charCode <= 57) {
    return true;
  } else {
    return false;
  }
}
//2.Функция сохранения номера
function saveCode(value) {
  //result.innerHTML += "<li>" + value + "</li>";
  if (value == '') return false;
  var elem = document.createElement("li"),
    content = document.createTextNode(value);
  elem.appendChild(content);
  result.appendChild(elem);
  var arrChilds = result.childNodes,
    limit = 10,
    countRows = arrChilds.length
  if (countRows >= limit) {
    result.clear();
  }
}
//3.Функция очистки инпута.
function clearInput() {
  code.value = ''
  clear.style.display = 'none';
}
//4.Проверка строки на изменение и при количестве 12 символов добавление в кодлист.
code.oninput = function() {
  var value = this.value;
  // if (!value)
  clear.style.display = 'inline';

  if (value.length == 12) {
    saveCode(value);
    clearInput();
  }

}
//5.Постоянный автофокус на инпуте.
document.onclick = function() {
  code.focus();
}
icon.onclick = function() {
  clearInput();
}
document.addEventListener("DOMContentLoaded", function() {
  clearInput()
  console.log("Здаровко,щегол");

});

result.clear = function() {
  this.innerHTML = ''
}
