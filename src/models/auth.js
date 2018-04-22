import { Intent } from '@blueprintjs/core';

import requestModel from './request';
import { Toast } from '../config/toast';
import history from '../config/history';
import { DEFAULT_ROUTE } from '../config/terminology';
import * as authServices from '../services/auth';

const model = {
  namespace: 'auth',
  actions: {},
  effects: {},
  reducers: {},
};

// register this model as request listener
requestModel.register(model.namespace)


// default state

model.state = {
  user: {}
}

// actions

model.actions.signin = ({ email, password }) => ({
  type: `${model.namespace}/signin`,
  email, password,
  keys: ['signin'],
})

model.actions.signout = () => ({
  type: `${model.namespace}/signout`,
})

// effects

model.effects.signin = function* (variables = {}, { put }) {
  yield put({
    type: `${requestModel.namespace}/request`,
    service: authServices.signin,
    variables,
  });
}

// reducers

model.reducers.signout = (state = {}, action = {}) => {
  return { ...state, user: null };
}

model.reducers.requestSuccess = (state = {}, action = {}) => {
  try {
    const user = action.res.signin.data;
    history.push(`/${DEFAULT_ROUTE}`);
    return { ...state, user };
  } catch (e) {
    return state;
  }
}

model.reducers.requestFail = (state, action = {}) => {
  Toast.show({ message: action.message, intent: Intent.DANGER })
  return state;
}

export default model;
