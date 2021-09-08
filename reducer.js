/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import storage from "./util/storage.js";

const init = {
  todos: storage.get(),
  filter: "all",
  filters: {
    all: () => true,
    active: (todo) => !todo.completed,
    completed: (todo) => todo.completed,
  },
  editIndex: null,
};

const actions = {
  ADD_TODO({ todos }, [todo]) {
    todos.push(todo);
  },
  TOGGLE_COMPLETED({ todos }, [index]) {
    const todo = todos[index];
    todo.completed = !todo.completed;
  },
  DELETE_TODO({ todos }, { index }) {
    todos.splice(index, 1);
  },
  TOGGLE_ALL({ todos }, [completed]) {
    todos.forEach((todo) => {
      todo.completed = completed;
    });
  },
  CLEAR_COMPLETED(state) {
    state.todos = state.todos.filter(state.filters.active);
  },
  CHANGE_FILTER(state, [filter]) {
    state.filter = filter;
  },
  EDIT_TODO(state, [editIndex]) {
    state.editIndex = editIndex;
  },
  UPDATE_TODO(state, [title]) {
    if (state.editIndex !== null) {
      const index = state.editIndex;
      state.todos[index].title = title;
      state.editIndex = null;
    }
  },
  CANCEL_EDIT_TODO(state) {
    state.editIndex = null;
  },
};
function reducer(state = init, action, args) {
  actions[action]?.(state, args);
  storage.set(state.todos);
  return state;
}

export { reducer as default };
