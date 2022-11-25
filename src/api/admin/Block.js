import config from '@/api/index'
import Admin from '@/api/admin/index';
import ApiResolver from '@/api/admin/ApiResolver';

// const Block = {}
//
// Block.getAll = async function() {
//   return new Promise((resolve, reject) => {
//     fetch(`${config.host}/block`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Connection': 'keep-alive',
//         'Authorization': `Bearer ${Admin.getToken()}`
//       }
//     })
//       .then(res => resolve(res))
//       .catch(err => reject(err))
//   })
// }
//
// Block.get = async function(id) {
//   return new Promise((resolve, reject) => {
//     fetch(`${config.host}/block/${id}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Connection': 'keep-alive',
//         'Authorization': `Bearer ${Admin.getToken()}`
//       }
//     })
//       .then(res => resolve(res))
//       .catch(err => reject(err))
//   })
// }
//
// Block.create = async function(name, tests) {
//   return new Promise((resolve, reject) => {
//     fetch(`${config.host}/block`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Connection': 'keep-alive',
//         'Authorization': `Bearer ${Admin.getToken()}`
//       },
//       body: {
//         name,
//         tests
//       }
//     })
//       .then(res => resolve(res))
//       .catch(err => reject(err))
//   })
// }
//
// Block.remove = async function(id, moveTests) {
//
//   //If you not specify block for some tests that tests will be removed too
//   //If you set moveTests to zero it will delete all tests in block that you delete
//
//   return new Promise((resolve, reject) => {
//     fetch(`${config.host}/block/${id}`, {
//       method: 'DEL',
//       headers: {
//         'Content-Type': 'application/json',
//         'Connection': 'keep-alive',
//         'Authorization': `Bearer ${Admin.getToken()}`
//       },
//       body: {
//         moveTests
//       }
//     })
//       .then(res => resolve(res))
//       .catch(err => reject(err))
//   })
// }

export default class Block extends ApiResolver {

  id;

  constructor(id) {
    super("block");
    this.id = id;
  }

  remove(moveTests) {
    return super.remove(`/${this.id}`, { moveTests }, (res) => console.log(res), err => console.error(err));
  }
}
