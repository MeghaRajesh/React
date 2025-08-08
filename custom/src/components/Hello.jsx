import { useContext } from "react";
import { useWelcome } from "../hooks/Welcome";
import { userContext } from "../main";

export const Hello=()=>{
    const message=useWelcome();
     const user=useContext(userContext);
    return(
        <div>
            {user}<br/>
            {message}
        </div>
    );
}