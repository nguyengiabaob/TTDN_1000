import React from 'react';


import Left from './Left';

import Main from './Main';

import Right from './Right';
import Slide from './slide';

import Footers from './footer';
class Littlebody extends React.Component {
    
    
    render()
    {   
        
        return(
            <div id="body">
                <Slide/>
                <article>
                    <Left/>
                    <Main/>
                    <Right/>
                        
                </article>
                <Footers/>
           </div>

        )
    }
}
export default Littlebody;