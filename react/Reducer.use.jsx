import { useReducer } from "react"

function reducer (state, action){
    if(action.type ==="Ince"){
        return {
            ...state,
            count: state.count +  1
            
        }
    }
    if(action.type ==="Decr"){
        return {
            ...state,
            count: state.count -  1
            
        }
    }

    return state
}


const App = ()=>{

   const [state, dispatch] = useReducer(reducer , {conte:0})

   return (

    <div>
        <p>{state.count}</p>

        <button onClick={()=>dispatch({type:"Incre"})}>Incrment</button>
    </div>
   )
}