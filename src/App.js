import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
//import Movies from './components/Movies';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Routes> 
       <Route path='/' element={<Home/>}/>
       <Route path= '/home/:id' element={<Detail/>}/>
       {/* <Route path= '/movies' element={<Movies/>}/> */}
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
