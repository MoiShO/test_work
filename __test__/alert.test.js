import Alert from '../src/js/components/Alert/Alert.jsx'
import React from 'react';
import renderer from 'react-test-renderer';

test('Alert Render REACT COMPONENTS',()=>{
  let message = "Fill out the form"
  const component = renderer.create(
  <Alert message={message}>  </Alert>,
  );
  let tree = component.toJSON();

  expect(tree.children[1].type).toEqual('p');
  
  expect(tree.children[1].children[1]).toEqual(message);
 }
)