import { request } from 'graphql-request'

const getBase = () => {

  // prod environment
  if (!window.location.href.match('localhost|127.0.0.1')) {
    return 'https://mgmtx-server.now.sh/'
  }

  // local environment
  return 'https://mgmtx-server.now.sh/'
  //return 'http://localhost:4000'
}

export default ({ base, query, variables }) => {
  const uriBase = base || getBase();

  return request(uriBase, query, variables)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}
