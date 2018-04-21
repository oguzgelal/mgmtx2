
const model = {
  namespace: 'theme',
  actions: {},
  effects: {},
  reducers: {},
};

// method names
model._changeTheme = 'changeTheme';

// internal data
model._data = {
  themes: [
    {
      id: 'light',
      icon: 'flash',
      title: 'Light Theme',
    },
    {
      id: 'dark',
      icon: 'moon',
      title: 'Dark Theme',
    }
  ]
};

// default state
model.state = {
  active: model._data.themes[0]
}

// actions
model.actions[model._changeTheme] = (payload) => ({
  type: `${model.namespace}/${model._changeTheme}`
})

// effects
model.effects[model._changeTheme] = function* ({ payload }, { put }) {
  yield put({ type: `${model._changeTheme}Reducer` });
}

// reducers
model.reducers[`${model._changeTheme}Reducer`] = (state, action) => {
  let newTheme = model._data.themes.map(i => i.id).indexOf(state.active.id) + 1;
  if (newTheme >= model._data.themes.length) { newTheme = 0; }
  return Object.assign({}, state, {
    active: model._data.themes[newTheme]
  });
}

export default model;
