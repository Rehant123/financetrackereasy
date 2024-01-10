
import './App.css';
import MainPage from './PAGES/MainPage';
import Welcomepage from './PAGES/Welcomepage';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
     <Routes>
      <Route exact path = "/" element = {<Welcomepage/>}></Route>
      <Route exact path = "/main" element = {<MainPage/>}></Route>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
