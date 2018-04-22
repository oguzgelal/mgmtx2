
const model = {
  namespace: 'theme',
  actions: {},
  effects: {},
  reducers: {},
};

// internal data
model.data = {
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
  active: model.data.themes[0]
}

// actions
model.actions.changeTheme = (payload) => ({
  type: `${model.namespace}/changeTheme`
})

// effects
model.effects.changeTheme = function* ({ payload }, { put }) {
  yield put({ type: 'changeThemeReducer' });
}

// reducers
model.reducers.changeThemeReducer = (state, action) => {
  let newTheme = model.data.themes.map(i => i.id).indexOf(state.active.id) + 1;
  if (newTheme >= model.data.themes.length) { newTheme = 0; }
  return Object.assign({}, state, {
    active: model.data.themes[newTheme]
  });
}

export default model;
