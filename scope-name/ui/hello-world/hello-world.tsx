import React from 'react';
import { getHelloWorld } from '@testcomponent/test.get-hello-world';

/**
 *  A function component that returns a div with the text "Hello World"
 */

export function HelloWorld() {
  return <div>{getHelloWorld()}</div>;
}
