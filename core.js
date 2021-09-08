/* eslint-disable no-restricted-syntax */
function html([first, ...strings], ...values) {
  return values
    .reduce((acc, cur) => acc.concat(cur, strings.shift()), [first])
    .filter((element) => (element && element !== true) || element === 0)
    .join("");
}

function createStore(reducer) {
  let state = reducer();

  const roots = new Map();
  function render() {
    for (const [root, component] of roots) {
      const output = component();
      root.innerHTML = output;
    }
  }

  return {
    // key, value, root chinh la selector root, component de hien thi
    attach(component, root) {
      roots.set(root, component);
      render();
    },
    // connect tu stote -> view (component)
    connect(selector = (_state) => _state) {
      return (component) =>
        (props, ...args) =>
          component(Object.assign({}, props, selector(state), ...args));
    },
    dispatch(action, ...args) {
      state = reducer(state, action, args);
      render();
    },
  };
}

export { html, createStore };
