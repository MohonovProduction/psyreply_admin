import Request from '@/api';

export default class Company extends Request {
  constructor(id = 0) {
    super('company', id);
  }
}
