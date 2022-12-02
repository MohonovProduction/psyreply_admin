import Request from '@/api';

export default class Block extends Request {
  constructor(id) {
    super('block', id);
  }

  copyToCompany(companyId, body) {
    return this.create(`copy/${companyId}`, body)
  }

  remove(body) {
    return this.execute(`block`, 'DELETE', body,(res) => res, (err) => err)
  }
}
