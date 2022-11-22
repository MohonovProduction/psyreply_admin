import config from '@/api'
import Admin from '@/api/admin/index'

const Results = {}

Results.get = async function() {
  return new Promise((resolve, reject) => {
    fetch(`${config.host}/result`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Authorization': `Bearer ${Admin.getToken()}`
      },
    })
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

Results.search = async function(search) {
  return new Promise((resolve, reject) => {
    fetch(`${config.host}/result`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Authorization': `Bearer ${Admin.getToken()}`
      },
      body: search
    })
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

Results.update = async function(id, arrayOfMetriks) {
  return new Promise((resolve, reject) => {
    fetch(`${config.host}/result/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Authorization': `Bearer ${Admin.getToken()}`
      },
      body: arrayOfMetriks
    })
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

export default Results
