import config from '@/api/index';
import Request from '@/api/index';

const req = new Request

const Admin = {}

Admin.auth = async function(email, password) {
  return new Promise((resolve, reject) => {
    fetch(`${req.host}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive'
      },
      body: {
        email,
        password
      }
    })
      .then(async res => {
        resolve(res)
      })
      .catch(err => {
        resolve(err)
      })
  })
}

Admin.authCode = async function(code) {
  return new Promise((resolve, reject) => {
    fetch(`${config.host}/auth/code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive'
      },
      body: {
        code
      }
    })
      .then(async res => {
        const token = await res.json()
        //localStorage.setItem('token', token.token)
      })
      .catch(err => {
        resolve(err)
      })
  })
}

Admin.checkAuth = function() {
  const token = localStorage.getItem('token')
  return token !== null
}

Admin.getToken = function() {
  return localStorage.getItem('token')
}

export default Admin
