"use strict"

import expect = require('expect.js');

import {
  willBeOk, willFail
} from '../../../src/sub/code';

describe('', () => {

  it('should be ok', () => {
    let ok = willBeOk();
    expect(ok).to.be(42);
  });

  it('should fail', () => {
    let ok = willFail();
    expect(ok).to.be(42);
  });

});
