import { configure } from '@storybook/react';

function loadStories() {
  require ('../components/Button/__stories__/index'); //require all the stories files, make sure pathname is correct
}

configure(loadStories, module);
