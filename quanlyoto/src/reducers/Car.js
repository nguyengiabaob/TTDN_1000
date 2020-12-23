
let array=[];
const products ={
    list: array
    
}



const Carreducer =(state= products, action)=>{
   
    switch(action.type)
    {
        case'':{
            const {data} = action.payload
           
           return {data}
        }
       default:
           
           {    
               return state;
            }
    }
}
export default Carreducer;