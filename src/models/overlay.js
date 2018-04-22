
const model = {
  namespace: 'overlay',
  actions: {},
  effects: {},
  reducers: {},
};

// default state
model.state = {
  open: false,
  stack: [],
}

// actions
model.actions.showOverlay = (payload) => ({
  type: `${model.namespace}/showOverlay`
})
model.actions.hideOverlay = (payload) => ({
  type: `${model.namespace}/hideOverlay`
})

// effects
model.effects.showOverlay = function* ({ payload }, { put }) {
  yield put({ type: 'showOverlayReducer' });
}
model.effects.hideOverlay = function* ({ payload }, { put }) {
  yield put({ type: 'hideOverlayReducer' });
}

// reducers
model.reducers.showOverlayReducer = (state, action) => {
  return Object.assign({}, state, { open: true });
}
model.reducers.hideOverlayReducer = (state, action) => {
  return Object.assign({}, state, { open: false });
}

export default model;
