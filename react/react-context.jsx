import { createContext, useContext, useState } from "react";


const UserContext = createContext()


const ContextProvider = ({children})=>{

const [count, setCount] =  useState(0)

    return(
        <UserContext.Provider value={{count, setCount}}>
            {children}
        </UserContext.Provider>
    )

}


function Counter(){
  const {count, setCount} = useContext(UserContext)


  return(

    <div>
        <p>{count}</p>
        <button onClick={()=>setCount(count + 1)}>Click</button>
    </div>
  )

}

function App(){
    return(
        <ContextProvider>
            <Counter/>
        </ContextProvider>
    )
}