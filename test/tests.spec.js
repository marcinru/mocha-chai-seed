import { expect } from 'chai';
import { PrimeChecker } from '../src/index.js';

describe('PrimeChecker check(val) method', () => {
  let checker;

  beforeEach(() => {
    checker = new PrimeChecker();
  });

  it('should return false when passed 1', () => {
    expect(checker.check(1)).to.eql(false);
  })

  it('should return true when passed 2', () => {
    expect(checker.check(2)).to.eql(true);
  })

  it('should return false when passed 8', () => {
    expect(checker.check(8)).to.eql(false);
  })

  it('should return true when passed 13', () => {
    expect(checker.check(13)).to.eql(true);
  })

  it('should throw an error when called without a value', () => {
    let call = () => { checker.check() }
    expect(call).to.throw(Error, 'Invalid argument');
  })

  it('should throw an error when passed a value that is not a number', () => {
    let call = () => { checker.check('lorem ipsum') }
    expect(call).to.throw(Error, 'Invalid argument');
  })

})
