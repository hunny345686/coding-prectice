const { useMemo, useEffect, useLayoutEffect, useCallback } = require("react");


//  Use Effect 

useEffect(()=>{
   async function  fetchAPI(){
    const res =  await fetch("/user")
   }
   fetchAPI()
// }) it will run every render 
// },[]) //run after initial mont
// },[user]) // if user change it will run

 },[]) 


//  2.

useEffect(()=>{

    const time = setTimeout(()=>{
        console.log("call timer")
    },1000)


    return ()=>{
        clearTimeout(time)
    }
})

// UseLayout Effect 

useLayoutEffect(()=>{
    const height = eleRef.currunt.offsetHeight
},[])


// Use Memo Expampe

const memoExample = useMemo(()=>{
    return user.filter((user)=>user.active)
},[user])


// useCallbck 

const callbak = useCallback(()=>{
    console.log("clicked")
},[])


// React.Memo 

const reactMemo = React.memo(({name})=>{
   return <div>{name}</div>;
})