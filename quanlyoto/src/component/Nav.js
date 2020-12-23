import React, { Component } from 'react';
import { BrowserRouter as  Link} from "react-router-dom";


class MenuNav extends Component
{
   // constructor(pros)
    //{
       // super(pros);
  //  }
  state={
    products:[],
    txttimkiem:"",
    bam:''
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
      onChange=(e)=>
      {
        var target = e.target;
        var name=target.name;
        var value =target.value;
        this.setState({
            [name]:value
        })
      }
    
    render(){
        const search=()=>{
          
            fetch('http://localhost:4000/search', {
         method: 'POST',
         headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              user: {
				 tukhoa:this.state.txttimkiem
			
				  
                
              }
            })
      });
          
        }
    
        return(
            <div id="subnav">
                <ul>
                    <li><a href="/"><Link to="/">Trang chủ</Link></a></li>
                    <li><a href="/Tintuc"><Link to="/Tintuc">Tin Tức</Link></a></li>
                    <li><a href="/Lienhe"><Link to="/Lienhe">Liên hệ</Link></a></li>
                </ul>
                <div>
                    <input type="text" size="20" name="txttimkiem" placeholder="Hãy nhập tên xe cần tìm..." onChange={this.onChange}/>
                    <a style={{color:"white", textDecoration:"none",paddingLeft:20, background:"#CDC8B1",paddingBottom:12,border:10,paddingRight:15,float:"right"}} href="/timkiem" onClick={search}>Tìm kiếm</a>
                </div> 
            
            </div>
        )

        }
       
    
}
export default MenuNav;