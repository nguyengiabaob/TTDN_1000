import React from 'react';



import Slide from './slide';
const { Route } = require("react-router-dom");

class Loadside extends React.Component
{
    render()
    {
        return(
            <div>
                <Route exact path="/"><Slide/></Route>
                <Route path="/Toyota"><Slide/></Route>
                <Route path="/Audi"><Slide/></Route>
                <Route path="/Lienhe"><Slide/></Route>
                <Route path="/Tintuc"><Slide/></Route>
               
            </div>
        )
        
    }
}
export default Loadside;