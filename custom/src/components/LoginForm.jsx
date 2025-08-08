import { use, useState } from "react";
import { useForm } from "../hooks/Form";

export function LoginForm(){
    const {email,password,conPassword,validate,setConPassword,setEmail,setPassword,error}=useForm();
    
    return(
        <div>
            <form onSubmit={validate}>
                Enter email : <br/>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)} /><br/><br/>
                {error.email && <p>{error.email}</p>}
                Enter Password :<br/>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} /><br/><br/>
                 {error.password && <p>{error.password}</p>}
                Confirm Password :<br/>
                <input type="password" value={conPassword} onChange={e=>setConPassword(e.target.value)} /><br/><br/>
                 {error.conPassword && <p>{error.conPassword}</p>}
                <button type="submit">Login</button>
                
            </form>
        </div>
    );
    
}