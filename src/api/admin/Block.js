import Request from '@/api';

export default class Block extends Request {
  constructor(id) {
    super('block', id);
  }

  copyToCompany(blockId, companyId) {
    return this.create(`block/${blockId}/copy/${companyId}`, {})
  }
}
