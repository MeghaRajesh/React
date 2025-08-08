import { useState } from "react"

export const useCounter=()=>{
    const [count,setCount]=useState(0);

    function increment(){
        var val=count+1;
        setCount(val);
    }
    function decrement(){
        var val=count-1;
        setCount(val);
    }
    function reset(){
        var val=0;
        setCount(val);
    }
    return {count,increment,decrement,reset}

}