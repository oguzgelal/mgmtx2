import _ from 'lodash';

const model = {
  namespace: 'request',
  actions: {},
  effects: {},
  reducers: {},
  registered: [],
};

// method for models to register to the request model
model.register = namespace =>
  model.registered.push(namespace)

// default state

model.state = {
};

// effects

model.effects.request = function* ({ service, variables = {} }, { all, call, put }) {

  // Init request for local reducer
  yield put({
    type: `requestReducer`,
    requestType: variables.type || 'default',
    keys: variables.keys || []
  })

  // Initiate the request
  const res = yield call(service, variables);

  // Response
  if (res.data) {

    // local success
    yield put({
      type: 'requestSuccess',
      requestType: variables.type || 'default',
      keys: variables.keys || [],
      res: res.data
    })

    // dispatch success action for all registered models
    yield all(model.registered.map(ns =>
      put({
        type: `${ns}/requestSuccess`,
        requestType: variables.type || 'default',
        keys: variables.keys || [],
        res: res.data
      })
    ))
  }
  else {
    const err = res.err || {};
    const response = err.response || {};
    const errors = response.errors || [];
    const message = errors.map(e => e.message).join('\n') || '';

    // local fail
    yield put({
      type: 'requestFail',
      requestType: variables.type || 'default',
      keys: variables.keys || [],
      message: message || 'Unknown error'
    })

    // dispatch fail action for all registered models
    yield all(model.registered.map(ns =>
      put({
        type: `${ns}/requestFail`,
        requestType: variables.type || 'default',
        keys: variables.keys || [],
        message: message || 'Unknown error'
      })
    ))
  }
}

// reducers

model.reducers.requestReducer = (state, action = {}) => {
  const s = _.cloneDeep(state);
  (action.keys || []).map(key => s[key] = true)
  return s;
}

model.reducers.requestSuccess = (state, action = {}) => {
  const s = _.cloneDeep(state);
  (action.keys || []).map(key => s[key] = false)
  return s;
}

model.reducers.requestFail = (state, action = {}) => {
  const s = _.cloneDeep(state);
  (action.keys || []).map(key => s[key] = false)
  return s;
}

export default model;
