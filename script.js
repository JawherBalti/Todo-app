const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const todoList = document.getElementById('todo-list')
var itemCountSpan = document.getElementById('item-count')
var uncheckedCountSpan = document.getElementById('unchecked-count')

const text = document.createElement("input")
text.id = "todo-text"
todoList.appendChild(text)


function newTodo() {

  var li = document.createElement('li')
  var CB = document.createElement('input')

  li.className = 'todo-container'

  CB.setAttribute("type", "checkbox")
  CB.className = 'todo-checkbox'
  CB.value = "1"

  
  if (text.value != "") {
    li.innerHTML =text.value
    todoList.appendChild(li)
    li.appendChild(CB)
    itemCountSpan.innerHTML++
    uncheckedCountSpan.innerHTML++
  }


    //Progress BAR
  var arrCB = document.getElementsByClassName('todo-checkbox')
  
  CB.onclick = function(){
    var i = 0;
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar");
      var width = 10;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width = (((itemCountSpan.innerHTML-uncheckedCountSpan.innerHTML)/itemCountSpan.innerHTML)*100).toFixed(2);
          elem.style.width = width + "%";
          elem.innerHTML = width  + "%";
        }
      }
    }
    var total = 0
    uncheckedCountSpan.innerHTML = itemCountSpan.innerHTML
    for (var i = 0; i < arrCB.length; i++) {
      if (arrCB[i].checked === true) {
        total += parseInt(arrCB[i].value)
        uncheckedCountSpan.innerHTML = itemCountSpan.innerHTML - total
      }
    }
  }
}

