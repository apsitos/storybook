import React from 'react';
import Button from '../Button/Button'

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <p>Hello, you.</p>
        <Button />
      </div>
    )
  }
}
