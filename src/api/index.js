import Admin from '@/api/admin';


export default class Request {
  host = ''

  constructor(endpoint) {

  }

  execute(url, method, body, onResolve, onReject) {
    return new Promise((resolve, reject) => {
      const input = `${this.host}/${url}`

      const init = {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Connection': 'keep-alive',
          'Authorization': `Bearer ${Admin.getToken()}`
        },
        body
      }

      fetch(input, init)
        .then(res => resolve(onResolve(res)))
        .catch(err => reject(onReject(err)))
    })
  }
}
