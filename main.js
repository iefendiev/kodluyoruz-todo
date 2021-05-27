$(document).ready(function () {
  let todos = document.querySelector('#todos');
  let todoListArray = [];

  const listSubmit = (event) => {
    event.preventDefault();

    let list_item = document.createElement('li');
    let span = document.createElement('span');
    span.innerHTML = 'X';
    span.classList.add('span-class');

    if (todo.value) {
      todoListArray.push(todo.value);
      list_item.classList.add('list-item-class');

      todoListArray.forEach((element) => {
        list_item.innerHTML = element;
        list_item.appendChild(span);
        todos.appendChild(list_item);
      });
    }
    todo.value = '';
  };

  const removeFromArray = (data) => {
    todoListArray = todoListArray.filter((element) => element !== data);
  };

  $('ul').on('click', 'span', function () {
    // console.log('remove function');
    const data = $(this).parent().text().slice(0, -1);
    removeFromArray(data);
    $(this).parent().remove();
  });

  $('ul').on('click', 'li', function () {
    // console.log('linethrough function');
    $(this).css('text-decoration-line') == 'none'
      ? $(this).css('text-decoration-line', 'line-through')
      : $(this).css('text-decoration-line', 'none');
  });

  const formDOM = document.querySelector('#form');
  formDOM.addEventListener('submit', listSubmit);
});
