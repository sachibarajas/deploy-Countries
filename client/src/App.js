import { Route } from "react-router-dom";
import {Home,Landing,Form,Detail} from './Views';
import './App.css';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001';

function App() {
  return (
    <div className="App"> 
      <Route exact path='/' component={Landing}/>
      <Route exact path="/home" component={Home}/>
      <Route path ='/activities' component={Form}/>
      <Route path='/countries/:id' component={Detail}/>
      
    </div>
  );
}

export default App;
