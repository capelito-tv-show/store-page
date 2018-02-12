import React from 'react';
import { compose, withState } from 'recompose';

const Enhance = compose(
  withState('counter', 'updateCounter', 0)
);

const App = ({counter, updateCounter}) => {
  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={() => updateCounter((counter) => counter+1 )}>Increment</button>
    </div>
  );
}

export default Enhance(App);
