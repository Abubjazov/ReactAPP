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

 changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  inputHandler = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  summerTime = () => {
    this.setState({
      pageTitle: new Date().toLocaleString()
    })
  }

  render() {
    return (

      <div className='App'>
        <h1>{this.state.pageTitle}</h1>
  
        <button 
          onClick={this.summerTime}
          >Change title</button>

        <input type="text" onChange={this.inputHandler} />

        { 
        this.state.cars.map((car, index) => {
          console.log(index)
          return (
            <Car 
              key={index}
              name={car.name} 
              year={car.year} 
              color={car.color}
              onChangeTitle={() => this.changeTitleHandler(car.name)}
            />
          )
        })
        }
  
        {/* <Car 
          name={carState.cars[0].name} 
          year={carState.cars[0].year} 
          color={carState.cars[0].color}
          onChangeTitle={this.changeTitleHandler.bind(this, carState.cars[0].name)} //более правильный и быстрый
        />
        <Car 
          name={carState.cars[1].name} 
          year={carState.cars[1].year} 
          color={carState.cars[1].color} 
          onChangeTitle={() => this.changeTitleHandler(carState.cars[1].name)}
        />
        <Car 
          name={carState.cars[2].name} 
          year={carState.cars[2].year} 
          color={carState.cars[2].color} 
          onChangeTitle={() => this.changeTitleHandler(carState.cars[2].name)}
        /> */}
      </div>
    )  
  }
  
}

export default App;
