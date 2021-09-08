const KEY_LOCAL_STORAGE = "TODO_LIST";

export default {
  get() {
    return JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE)) || [];
  },
  set(value) {
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(value));
  },
};
