import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Routes> 
       <Route path='/home' element={<Home/>}/>
       <Route path= '/home/:id' element={<Detail/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
