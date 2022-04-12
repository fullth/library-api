import { expect } from 'chai';

describe('모카 테스트 프레임워크 테스트', () => {
  it('잘 실행되는지 테스트', () => {
    expect(1).to.equal(1);
    expect(1).to.not.equal(2);
  });
});