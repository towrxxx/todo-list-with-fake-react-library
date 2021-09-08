/* eslint-disable import/extensions */
import { html } from "../core.js";

function Header() {
  return html` <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      placeholder="What needs to be done?"
      autofocus
      onkeyup="event.keyCode === 13 && event.target.value &&
      dispatch('ADD_TODO', {title: event.target.value.replace(event.target.value[0], event.target.value[0].toUpperCase()), completed: false}) || this.focus();"
    />
  </header>`;
}

export { Header as default };
