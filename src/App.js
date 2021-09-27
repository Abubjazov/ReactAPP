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
    pageTitle: 'Car list',
    showCars: false 
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  // inputHandler = (event) => {
  //   this.setState({
  //     pageTitle: event.target.value
  //   })
  // }

  // summerTime = () => {
  //   this.setState({
  //     pageTitle: new Date().toLocaleString()
  //   })
  // }

  render() {
    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
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
    return (

      <div className='App'>
        <h1>{this.state.pageTitle}</h1>
  
        <button 
          onClick={this.toggleCarsHandler}
          >Toggle Cars</button>

        {/* <input type="text" onChange={this.inputHandler} /> */}

        { cars }
      </div>
    )  
  }
  
}

export default App;
