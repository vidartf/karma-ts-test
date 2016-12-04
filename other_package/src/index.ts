

import * as CodeMirror  from 'codemirror';

import 'codemirror/mode/meta';


export function a() {
  let node = document.createElement('div');
  let cm = CodeMirror(node);
  return cm;
}


CodeMirror.defineMIME('text/x-ipython', 'ipython');
    CodeMirror.modeInfo.push({
    ext: [],
    mime: 'text/x-ipython',
    mode: 'ipython',
    name: 'ipython'
});
