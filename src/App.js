import './App.css';
import Car from './Car/Car';

function App() {
  return (
    <div className='App'>
      <h1>Hello React world</h1>
      <Car name={'Ford'} year={2020} color={'red'}/>
      <Car color={'black'} name={'Audi'} year={2021}/>
    </div>
  )  
}

export default App;
