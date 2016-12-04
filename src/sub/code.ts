"use strict"

import * as CodeMirror from 'codemirror';

import {
  a
} from 'test-codemirror/lib/index.js';

export function willBeOk(): number {
  console.log('Hi!');
  return 42;
}


export function willFail(): number {
  console.log('Ho!');
  return 13;
}

export function genCM(): CodeMirror.Editor {
  return a();
}
