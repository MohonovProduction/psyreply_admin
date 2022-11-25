import config from '@/api';
import Admin from '@/api/admin/index';

export default class ApiResolver {
  endpoint = ""
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  resolve(url, method, body, onResolve, onReject) {
    return new Promise((resolve, reject) => {
      fetch(`${config.host}/${this.endpoint}${url}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Connection': 'keep-alive',
          'Authorization': `Bearer ${Admin.getToken()}`
        },
        body,
      })
        .then(res => onResolve(res))
        .catch(err => onReject(err))
    })
  }

  remove(url, body, onResolve, onReject) {
    return this.resolve(url, 'DELETE', body, onResolve, onReject);
  }
}
