import React, { Component } from 'react';
import { CardContainer } from './Components/card-container/card-container.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemons: [
        {
          name: 'bulbasaur',
        },
      ],
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
      .then((response) => response.json())
      .then((users) => this.setState({ pokemons: users }));
  }

  render() {
    const { pokemons } = this.state;

    return (
      <div className="App">
        <h1>React Pokedex</h1>
        <CardContainer pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
