/* eslint-disable import/extensions */
import { html } from "../core.js";

function TodoItem({ todo, index, editIndex }) {
  return html`
    <li class="${todo.completed && "completed"} ${editIndex === index && "editing"}">
      <div class="view ">
        <input
          class="toggle"
          type="checkbox"
          ${todo.completed && `checked`}
          onchange="dispatch('TOGGLE_COMPLETED',
          ${index})"
        />
        <label ondblclick="dispatch('EDIT_TODO', ${index})">${todo.title}</label>
        <button class="destroy" onclick="dispatch('DELETE_TODO', ${index})"></button>
      </div>
      <input
        class="edit"
        value="${todo.title}"
        onkeyup="event.keyCode === 13 && event.target.value &&
        dispatch('UPDATE_TODO', event.target.value.replace(event.target.value[0], event.target.value[0].toUpperCase())) || event.keyCode === 27 && dispatch('CANCEL_EDIT_TODO')"
        onblur="event.target.value &&
        dispatch('UPDATE_TODO', event.target.value.replace(event.target.value[0], event.target.value[0].toUpperCase()))"
      />
    </li>
  `;
}

export { TodoItem as default };
