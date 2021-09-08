/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */
import { html } from "../core.js";

function Footer({ todos, filters, filter }) {
  return html`
    <footer class="footer">
      <!-- This should be '0 items left' by default -->
      <span class="todo-count"><strong>${todos.filter(filters.active).length}</strong> item left</span>
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        ${Object.keys(filters).map(
          (key) => html`<li>
            <a class="${key === filter && "selected"}" href="#/${key}" onclick="dispatch('CHANGE_FILTER', '${key}')"
              >${key.replace(key[0], key[0].toUpperCase())}</a
            >
          </li>`,
        )}
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button
        class="${todos.every(filters.active) ? "hidden" : "clear-completed"}"
        onclick="dispatch('CLEAR_COMPLETED')"
      >
        Clear completed
      </button>
    </footer>
  `;
}

export default Footer;
