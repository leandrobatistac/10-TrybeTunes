import React from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>TrybeTunes</p>
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App;
