"use strict"

import expect = require('expect.js');

import {
  willBeOk, willFail
} from '../../../src/sub/code';

const mydata = require('../../files/data.json') as (string | number)[];
//const mydata2 = require('../../files/otherext.nosj') as (string | number)[];

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

  /*it('should get JSON data correctly, even with different extension', () => {
    expect(mydata2).to.eql([
      1, 2, 3, "a", "b", "c"
    ])
  });*/


});
