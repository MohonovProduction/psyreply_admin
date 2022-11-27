import Request from '@/api';

export default class Company extends Request {
  constructor(id) {
    super('company', id);
  }
}
