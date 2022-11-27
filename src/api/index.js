import Admin from '@/api/admin/Auth';
import axios from 'axios';

class Error {
  message = ''
  bad = true

  constructor(message) {
    this.message = message
  }

  msg() {
    return `Возникла непредвиденная ошибка: ${this.message}`
  }
}

export default class Request {
  host = 'https://api.psyreply.com/'
  endpoint = null
  id = null

  constructor(endpoint, id) {
    this.endpoint = endpoint
    this.id = id
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
        .then(async res => {
          if (res.ok) {
            resolve(onResolve(await res.json()))
          } else {
            switch (res.status) {
              case 400: resolve(new Error('не корректный запрос'))
                break
              case 401: resolve(new Error('не авоторизован'))
                break
              case 404: resolve(new Error('не найдено'))
                break
              case 500: resolve(new Error('Сервер не отвечает. Да, всё очень плохо'))
            }
          }
        })
        .catch(err => resolve(onReject(err)))
    });
  }

  getAll(filters, onResolve = (res) => res, onReject = (err) => err) {
    return this.execute(`${this.host}/${this.endpoint}/all`, 'POST', filters, onResolve, onReject)
  }

  get(id, onResolve = (res) => res, onReject = (err) => err) {
    return this.execute(`${this.host}/${this.endpoint}/${id}`, 'GET', {}, onResolve, onReject)
  }

  remove(id, onResolve = (res) => res, onReject = (err) => err) {
    return this.execute(`${this.host}/${this.endpoint}/${id}`, 'DELETE', {}, onResolve, onReject)
  }

  update(id, body, onResolve = (res) => res, onReject = (err) => err) {
    return this.execute(`${this.host}/${this.endpoint}/${id}`, 'PATCH', body, onResolve, onReject)
  }

  create(id, body, onResolve = (res) => res, onReject = (err) => err) {
    return this.execute(`${this.host}/${this.endpoint}/${id}`, 'POST', body, onResolve, onReject)
  }
}
