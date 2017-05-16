code.onkeypress = function (e) {

  var charCode = e.charCode;


  if (charCode == 13){
    saveCode(code.value);
    clearInput();
  };
  if (charCode >= 48 && charCode <= 57) {
    return true;
  } else {
    return false;
  }


}
code.oninput = function() {
  var value = this.value;

  if (value.length == 12) {
    saveCode(value);
    clearInput();
  }
}

function saveCode(value) {
  //result.innerHTML += "<li>" + value + "</li>";
  var elem = document.createElement("li"),
      content = document.createTextNode(value)

  elem.appendChild(content);
  result.parentNode.appendChild(elem);
}

function clearInput() {
  code.value = ''
}
