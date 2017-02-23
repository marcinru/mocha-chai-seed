import { expect } from 'chai';
import { PrimeChecker } from '../src/index.js';

describe("PrimeChecker class under test", () => {

  let checker;

  beforeEach(() => {
    checker = new PrimeChecker();
  });

  it("should pass this test test", () => {
    expect(true).to.eql(true)
  })

  it("should return false when passed 1", () => {
    expect(checker.check(1)).to.eql(false);
  })

  it("should return true when passed 2", () => {
    expect(checker.check(2)).to.eql(true);
  })

  it("should return false when passed 8", () => {
    expect(checker.check(8)).to.eql(false);
  })

  it("should throw an error when called without a value", () => {
    var call = () => {checker.check();}
    expect(call).to.throw(Error,'Invalid argument');
  })

  it("should throw an error when passed a value that is not a number", () => {
    var call = () => {checker.check("piespies");}
    expect(call).to.throw(Error,'Invalid argument');
  })

})
