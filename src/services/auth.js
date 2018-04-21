import request from '../utils/request';

export const signin = ({ email, password }) => {
  return request({
    variables: { email, password },
    query: `mutation Signin ($email: String!, $password: String!){
      signin(email: $email, password: $password) {
        data
      }
    }`
  })
}
