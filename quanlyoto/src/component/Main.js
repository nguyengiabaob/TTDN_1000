import React from 'react';
import Buying from './buying';
import Detail from './Detail';
import Detailnews from './detailnews';

import Lienhe from './lienhe';

import Search from './search';
import Tintuc from './Tintuc';
import Toyota from './Toyota'
const { Route } = require("react-router-dom");
const { default: Midlle } = require("./Middle");


class Main extends React.Component{   
    state={
    products:[],
    thu:1,
    
    }
    
	  componentDidMount()
	  {
		this.getproduct();
	  }
	  getproduct=()=>
	
	  {
		fetch('http://localhost:4000/productdetail')
		.then(response=>response.json())
		.then((response=>this.setState({products:response.data})))
		.catch(err=>console.err(err))
      }
 
    
    
      
    render()
   
    { 
      return(
            <div>
                <Route exact path="/"component={Midlle}/>
                {this.state.products.map((product)=>{
                 console.log(product.theloai)
                 return( <Route path={"/"+ product.theloai} ><Toyota theloai={product.theloai}></Toyota></Route>
                 
                 )
                })}
              
                <Route path="/sieuphamlamborghinisianroadster"><Detailnews></Detailnews></Route>
                <Route path="/Lienhe" component={Lienhe}/>
                <Route path="/Tintuc" component={Tintuc}/>
                <Route path="/buying"><Buying></Buying></Route>
                <Route path="/timkiem"><Search></Search></Route>
                {this.state.products.map((product)=>{
                    return(
                    <Route path={product.link}><Detail id={product.ID}  kichthuoc={product.kichthuoc} 
                    socho={product.socho} 
                    kieudang={product.kieudang}
                     nhienlieu={product.nhienlieu} c
                     anxe={product.canxe} 
                     dungtichxang={product.dungtichxang} 
                     tenxe={product.tenxe} 
                     theloai={product.theloai} 
                     giaxe={product.giaxe}
                     hinhchinh1={product.hinhchinh1}
                     hinhchinh2={product.hinhchinh2}
                     hinhsmall={product.Hinhsmall}
                     hinhsmall2={product.hinhsmall2}
                     noidung1={product.noidung1}
                     noidung2={product.noidung2}
                     noidung3={product.noidung3}
                     hinh1={product.hinh1}
                     hinh2={product.hinh2}
                     hinh3={product.hinh3}></Detail></Route>
                    )
                })}
            
            </div>
            
        );
        
    }

}

export default Main;