import requestModel from './request';
import * as authServices from '../services/auth';
import { Intent } from '@blueprintjs/core';
import { Toast } from '../config/toast';

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

// effects

model.effects.signin = function* (variables = {}, { put }) {
  yield put({
    type: `${requestModel.namespace}/request`,
    service: authServices.signin,
    variables,
  });
}

// reducers

model.reducers.requestSuccess = (state, action = {}) => {
  return state;
}

model.reducers.requestFail = (state, action = {}) => {
  Toast.show({ message: action.message, intent: Intent.DANGER })
  return state;
}

export default model;
