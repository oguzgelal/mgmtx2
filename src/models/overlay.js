
const model = {
  namespace: 'overlay',
  actions: {},
  effects: {},
  reducers: {},
};

// method names
model._showOverlay = 'showOverlay';
model._hideOverlay = 'hideOverlay';

// default state
model.state = {
  open: false,
  stack: [],
}

// actions
model.actions[model._showOverlay] = (payload) => ({
  type: `${model.namespace}/${model._showOverlay}`
})
model.actions[model._hideOverlay] = (payload) => ({
  type: `${model.namespace}/${model._hideOverlay}`
})

// effects
model.effects[model._showOverlay] = function* ({ payload }, { put }) {
  yield put({ type: `${model._showOverlay}Reducer` });
}
model.effects[model._hideOverlay] = function* ({ payload }, { put }) {
  yield put({ type: `${model._hideOverlay}Reducer` });
}

// reducers
model.reducers[`${model._showOverlay}Reducer`] = (state, action) => {
  return Object.assign({}, state, { open: true });
}
model.reducers[`${model._hideOverlay}Reducer`] = (state, action) => {
  return Object.assign({}, state, { open: false });
}

export default model;
