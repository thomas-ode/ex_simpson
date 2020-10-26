import './App.css';
import axios from 'axios';
import DisplayQuotes from './components/DisplayQuotes';
import React from 'react'

const sampleQuotes = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  characterDirection: "Left"
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quotes: sampleQuotes
    };
    this.getQuotes= this.getQuotes.bind(this);
    
  }

  getQuotes(){
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(response => response.data)
    .then(data => {
      this.setState({
        quotes: data[0],
      });
    })
    console.log(this.getQuotes)
  }

  render() {
    return (
      <div className="App">
        <DisplayQuotes quotes={this.state.quotes}/>
        <button type="button" onClick={this.getQuotes}>Get a new Quote!</button>

      </div>
    )
  }
}


export default App;
