/* TODO import á allt viðeigandi úr ./lib/todo.js */

/**
 * @param {HTMLElement} todolist
 */
function initialize(todolist) {
  /* TODO finna form */
  /* TODO setja submit event handler á form */
  /* TODO finna gildi textareits í formi innan event handlers og búa til todo item útfrá því */
  /* TODO tengja „Fela kláruð atriði“ og „Hreinsa lista“ takka */
}

// Finnum todo lista og keyrum fall sem setur allt upp
const todoList = document.querySelector(".todo-list");

// Viljum vera viss um að todoList hafi fundist og sé HTMLElement
if (todoList && todoList instanceof HTMLElement) {
  initialize(todoList);
} else {
  console.error("no todo list found");
}
