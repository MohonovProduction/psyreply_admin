import config from '@/api/index';

const Admin = {}

Admin.auth = async function(email, password) {
  return new Promise((resolve, reject) => {
    fetch(`${config.host}/auth`, {
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
        resolve(await res.json())
      })
      .catch(err => {
        reject(err)
      })
  })
}

Admin.verify = async function(code) {
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
        resolve(await res.json())
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default Admin
