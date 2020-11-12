import React, { Component } from "react"
import Card from "./components/characters/Card";
import Header from "./components/header/header";
import Container from "./components/container/Container";
import characters from "./characters.json"

// Random shuffle of characters
function randomShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp
  }
  return array
};

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    score: 0,
    topScore: 0,
    correctIncorrect: "",
    clicked: [],
  };

  
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      correctIncorrect: "Correct!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ correctIncorrect: "Winner!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      correctIncorrect: "Wrong!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCharacters = randomShuffle(characters);
    this.setState({ characters: shuffledCharacters });
  };
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (    
      <Container>
         <Header
            score={this.state.score}
            message={this.state.message}
            topScore={this.state.topScore} />
        <div class="container"> 
          <div class="row">
            {this.state.characters.map(character => (
              <Card
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
                handleClick={this.handleClick}
                />
            ))}
            </div>
        </div>
      </Container>
    ); 
  }
}


export default App;

