import React from 'react';
import './App.css';
import Car from './Car/Car';

class App extends React.Component {

  state = {
    cars: [
      {name: 'Kia', year: 2020, color: 'red'},
      {name: 'Audi', year: 2015, color: 'black'},
      {name: 'Mazda', year: 2019, color: 'green'}
    ],
    pageTitle: 'Car list'
  }

 changeTitleHandler = () => {
    this.setState({
      pageTitle: 'Changed state'
    })
  }

  render() {
    console.log('Render')
    const carState = this.state
    return (
      <div className='App'>
        <h1>{carState.pageTitle}</h1>
  
        <button onClick={this.changeTitleHandler}>Change title</button>
  
        <Car name={carState.cars[0].name} year={carState.cars[0].year} color={carState.cars[0].color} />
        <Car name={carState.cars[1].name} year={carState.cars[1].year} color={carState.cars[1].color} />
        <Car name={carState.cars[2].name} year={carState.cars[2].year} color={carState.cars[2].color} />
      </div>
    )  
  }
  
}

export default App;
