import config from '@/api';
import Admin from '@/api/admin/index';

const Test = {}

Test.getAll = async function() {
  return new Promise((resolve, reject) => {
    fetch(`${config.host}/test`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Authorization': `Bearer ${Admin.getToken()}`
      },
    })
      .then(async res => { resolve(res) })
      .catch(err => reject(err))
  })
}

Test.get = async function(id) {
  return new Promise((resolve, reject) => {
    fetch(`${config.host}/test/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Authorization': `Bearer ${Admin.getToken()}`
      },
      body: {
        id
      }
    })
      .then(async res => { resolve(res) })
      .catch(err => reject(err))
  })
}

Test.creat = async function(type, title, formula, block_id, questions) {
  return new Promise((resolve, reject) => {

    if (!Test.formulaValidation(formula)) reject({ msg: 'invalid formula', code: 403 })

    fetch(`${config.host}/test`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Authorization': `Bearer ${Admin.getToken()}`
      },
      body: {
        type,
        title,
        formula,
        block_id,
        questions
      }
    })
      .then(async res => { resolve(res) })
      .catch(err => reject(err))
  })
}

Test.patch = async function(test) {
  return new Promise((resolve, reject) => {

    if ('formula' in test) {
      if (!Test.formulaValidation(test.formula)) reject({ msg: 'invalid formula', code: 403 })
    }

    fetch(`${config.host}/test/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Authorization': `Bearer ${Admin.getToken()}`
      },
      body: test
    })
      .then(async res => { resolve(res) })
      .catch(err => reject(err))
  })
}

//TODO: crate validation for shlyapaMarkup
Test.formulaValidation = function(formula) {
  console.log(formula)
  return true
}

Test.moveToBlock = async function(test, block) {
  return new Promise((resolve, reject) => {
    fetch(`${config.host}/test/${test}/move/${block}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Authorization': `Bearer ${Admin.getToken()}`
      },
    })
      .then(async res => { resolve(res) })
      .catch(err => reject(err))
  })
}

Test.removeFromBlock = async function(test, block, removeIfNoBlocks) {
  return new Promise((resolve, reject) => {
    fetch(`${config.host}/test/${test}/remove/${block}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Authorization': `Bearer ${Admin.getToken()}`
      },
      body: {
        removeIfNoBlocks
      }
    })
      .then(async res => { resolve(res) })
      .catch(err => reject(err))
  })
}

Test.remove = async function(id) {
  //If you not specify block for some tests that tests will be removed too
  //If you set moveTests to zero it will delete all tests in block that you delete

  return new Promise((resolve, reject) => {
    fetch(`${config.host}/test/${id}`, {
      method: 'DEL',
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Authorization': `Bearer ${Admin.getToken()}`
      }
    })
      .then(async res => resolve(res.json()))
      .catch(err => reject(err))
  })
}

export default Test
