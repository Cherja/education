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
  var elem = document.createElement("li"),
    content = document.createTextNode(value);

    if (value == '')return false;

  elem.appendChild(content);
  result.parentNode.appendChild(elem);
}
//3.Функция очистки инпута.
function clearInput() {
  code.value = ''
  sub.style.display='none';
}
//4.Проверка строки на изменение и при количестве 12 символов добавление в кодлист.
code.oninput = function() {
  var value = this.value;
  // if (!value)
  sub.style.display='inline';

  if (value.length == 12) {
    saveCode(value);
    clearInput();
  }
}
//5.Постоянный автофокус на инпуте.
document.onclick = function(){
  code.focus();
}
sub.onclick = function(){
  clearInput();
}
