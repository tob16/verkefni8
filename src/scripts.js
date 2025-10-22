import { clearList, updateStats, createTodoItem, toggleFinished } from "./lib/todo.js";

/* TODO import á allt viðeigandi úr ./lib/todo.js */

/**
 * @param {HTMLElement} todolist
 */
function initialize(todolist) {
  const form = todolist.querySelector('.form');
  const input = todolist.querySelector('#string');
  const toggleButton = todolist.querySelector('.toggle-finished');
  const button = todolist.querySelector('.clear-all');

  if (!form || !input) {
    console.error('form eða input fannst ekki, hætti');
  }

  if (toggleButton) {
    const finishedShown = todolist.dataset.finished !== 'hidden';
    toggleButton.textContent = finishedShown ? 'Fela kláruð atriði' : 'Sýna kláruð atriði';
    toggleButton.addEventListener('click', () => {
      toggleFinished(todolist);
      if (typeof checkListState === "function") checkListState(todolist);
    });
  }

  if (button) {
    button.addEventListener('click', () => {
      clearList(todolist);
      clearList(todolist);
      if (typeof checkListState === "function") checkListState(todolist);
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (value.length === 0) return;

    createTodoItem(todolist, value);
    updateStats(todolist);
    if (typeof checkListState === "function") checkListState(todolist);

    input.value = '';
    input.focus();
  });

  if (todolist.dataset.finished === "hidden") {
    todolist.querySelectorAll('.list li.finished').forEach((li) => (li.style.display = "none"));
  }
}

// TODO staðfesta að value er OK
// TODO finna form
// TODO setja submit event handler á form
// TODO finna gildi textareits í formi innan event handlers og búa til todo item útfrá því
// TODO tengja „Fela kláruð atriði“ og „Hreinsa lista“ takka

// Finnum todo lista og keyrum fall sem setur allt upp.
const todoList = document.querySelector(".todo-list");

if (todoList && todoList instanceof HTMLElement) {
  initialize(todoList);
} else {
  console.error("no todo list found");
}
