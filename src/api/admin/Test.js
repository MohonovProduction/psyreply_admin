import Request from '@/api';

export default class Test extends Request {
  constructor(id = 0) {
    super('test', id);
  }

  addToBlock(testId, blockId) {
    return this.create(`${testId}/move/${blockId}`, {})
  }

  removeFromBlock(testId, blockId) {
    return this.create(`${testId}/remove/${blockId}`, {})
  }

  shlypaMarkupValidation(string) {
    return /^(\+((\$\d+)|(\(((\d+)|(\$\d+))[+*-]\$\d+\))|(\(\-?\$\d+\))))+$/.test(string)
  }
}
