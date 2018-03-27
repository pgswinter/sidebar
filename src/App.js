import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Navigation from './components/Navigation'
import MenuBar from './components/ListItemClick/another'
import MyList from './components/TheToggleList/'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <MenuBar buttons={['cat', 'dog', 'penguin']}/>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <MenuBar/>
//       </div>
//     );
//   }
// }

export default App;
