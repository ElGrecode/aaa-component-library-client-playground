import React, {Component} from 'react';
import {AAAPrimaryTheme, Button} from 'aaa-component-library';

class App extends Component {
  render() {
    return (
      <div>
        <AAAPrimaryTheme>
          <h1>Hello React :)</h1>
          <Button>Hello Button</Button>
        </AAAPrimaryTheme>
      </div>
    );
  }
}
export default App;
