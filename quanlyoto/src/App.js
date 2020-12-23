//import logo from './logo.svg';
import './App.css';
import './component/Nav';
import MenuNav from './component/Nav';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import Main from './component/Main';

import Footers from './component/footer';







class App extends React.Component {
  state={
    products:[]
  }
  componentDidMount()
  {
    this.getproduct();
  }
  getproduct=()=>

  {
    fetch('http://localhost:4000/product')
    .then(response=>response.json())
    .then((response=>this.setState({products:response.data})))
    .catch(err=>console.err(err))
  }
  
  render(){
    
  return (
    
    <BrowserRouter>
   
    <div>
     
    <header>
		  <div id="logo">
		  <img src="hinh/images.png" alt="7"/>
      </div>
      </header>
      <nav>
        <MenuNav/>
      </nav>
      
     <Main />
      <Footers/>
     
</div>

</BrowserRouter>

  );
}
}
export default App;

