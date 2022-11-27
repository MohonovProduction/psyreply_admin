import Request from '@/api';

export default class Test extends Request {
  constructor(id) {
    super('test', id);
  }

  addToBlock(testId, blockId) {
    return this.create(`${testId}/move/${blockId}`, {})
  }

  removeFromBlock(testId, blockId) {
    return this.create(`${testId}/remove/${blockId}`, {})
  }
}
