import { createContext, useContext, useState } from "react";

const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("Prem");

  return <MyContext.Provider value={{user ,setUser}}>{children}</MyContext.Provider>;
};


<ContextProvider>
    <APP/>
</ContextProvider>


// and use it in component 


let {user, setUser} = useContext(MyContext)

// and use it 
