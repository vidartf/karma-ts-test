"use strict"

import expect = require('expect.js');

import {
  willBeOk, willFail
} from '../../../src/sub/code';

const mydata = require('../../files/data.json');

describe('', () => {

  it('should be ok', () => {
    let ok = willBeOk();
    expect(ok).to.be(42);
  });

  it('should not fail after all', () => {
    let ok = willFail();
    expect(ok).to.be(13);
  });

  it('should get the data correctly', () => {
    expect(mydata).to.eql([
      1, 2, 3, "a", "b", "c"
    ])
  });

});
