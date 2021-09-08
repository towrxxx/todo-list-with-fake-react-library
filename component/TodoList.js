/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import { html } from "../core.js";
import TodoItem from "./TodoItem.js";
import { connect } from "../store.js";

function TodoList({ todos, filters, filter, editIndex }) {
  return html`
    <section class="main">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        onchange="dispatch('TOGGLE_ALL', this.checked)"
        ${todos.filter(filters[filter]).length && todos.filter(filters[filter]).every(filters.completed) && "checked"}
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the class editing when editing and completed when marked as completed -->

        ${todos.filter(filters[filter]).map((todo, index) => TodoItem({ todo, index, editIndex }))}
      </ul>
    </section>
  `;
}

const connector = connect();
export default connector(TodoList);
