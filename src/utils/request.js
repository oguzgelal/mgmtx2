import { request } from 'graphql-request'

const getBase = () => {
  return 'http://localhost:4000'
}

export default ({ base, query, variables }) => {
  const uriBase = base || getBase();

  return request(uriBase, query, variables)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}
