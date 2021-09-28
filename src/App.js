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

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    // const cars = this.state.cars.concat() //clone array
    const cars = [...this.state.cars]        //clone array

    cars[index] = car
    this.setState({cars})
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat()

    cars.splice(index, 1)
    this.setState({cars})
  }

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
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={event => this.onChangeName(event.target.value, index)}
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
        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: 20
        }}>
          { cars }
        </div>
      </div>
    )  
  }
  
}

export default App;
