import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main/Main'

const App = () => {
  return(
    <div>
      <Main />
    </div>
  );
}

render(<App />, document.querySelector('.application'));
