import  { Component } from 'react';

class Slide extends Component
{
    render()
    {   let prev= ">";
        let next="<";
        return(
            <aside id="slide">
                <div className="slide-pager">
                    <div className="slide-control-next" onClick="nextclick()">{prev}</div>
                    <div className="slide-control-prev" onClick="prevclick()">{next}</div>
                </div>
                <div className="slide-container">
    	            <div className="slide-stage">
        	            <div className="slide-image">
            	            <img src="hinh/p0.jpg" name="image" alt="1"/>	
                         </div>
            
            
           
            </div>
        </div>
            </aside>
        )
    }
}
export default Slide;