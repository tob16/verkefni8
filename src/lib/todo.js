/* TODO hugsanlega importa el, empty úr ./elements.js */

// Leyfilegt að breyta skilgreiningum á föllum og bæta við fleiri föllum.

/* TODO merkja viðeigandi föll með `export` */

/**
 * Breytir stöðu atriðis í lista. Ef kláruð atriði eru sýnd er það sýnt, annars er það falið um leið og það er klárað.
 * @param {HTMLElement} item
 * @param {boolean} isShown `true` ef kláruð atriði eru sýnileg, annars `false`.
 * @returns {void}
 */
function toggleTodoItemStatus(item, isShown = true) {
  /* TODO útfæra */
}

/**
 * Fjarlægja atriði (sem DOM element) úr lista.
 * @param {HTMLElement} item
 * @returns {void}
 */
function removeTodoItem(item) {
  /* TODO útfæra */
}

/**
 * Breytir sýnileika kláraðra atriða í lista.
 * @param {HTMLElement} todolist
 * @return {boolean} `true` if finished items are shown, `false` if hidden
 */
function toggleFinished(todolist) {
  /* TODO útfæra */
}

/**
 * Hreinsar allan lista.
 * @param {HTMLElement} todolist
 * @return {void}
 */
function clearList(todolist) {
  /* TODO útfæra */
}

/**
 * Uppfærir upplýsingar um fjölda kláraðra og ókláraðra atriða í lista.
 * @param {Element | null} todoList
 * @return {void}
 */
function updateStats(todoList) {
  /* TODO útfæra */
}

/**
 * Býr til nýtt atriði í lista með texta `text`.
 * @param {HTMLElement} todolist
 * @param {string} text
 * @return {void}
 */
function createTodoItem(todolist, text) {
  /* TODO útfæra */
}

/**
 * Athugar hvort listinn sé tómur og sýnir eða felur skilaboð um tóman lista.
 * @param {HTMLElement} todolist
 * @return {void}
 */
function checkListState(todolist) {
  /* TODO útfæra */
}
