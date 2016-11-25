"use strict"

export function willBeOk(): number {
  console.log('Hi!');
  return 42;
}


export function willFail(): number {
  console.log('Ho!');
  return 13;
}
