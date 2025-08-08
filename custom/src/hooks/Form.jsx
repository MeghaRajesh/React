import { use, useState } from "react";

export const useForm=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [conPassword,setConPassword]=useState("");
    const [error,setError]=useState({});
    let newErrors=({
            email:"",
            password:"",
            conPassword:""
         });
    function validate(e){
         e.preventDefault();
         newErrors={...error};
        if(!email){
            newErrors.email="Enter email";
        } if(!password){
            newErrors.password="Enter password";
        } if(password.length<6){
            newErrors.password="Password must contain 6 characters";
        } if(!conPassword || conPassword!==password){
            newErrors.conPassword="Password error";
        } 
        else{
            console.log("success");
        }
        setError(newErrors);
    }
    return{
        email,password,conPassword,validate,setConPassword,setEmail,setPassword,error
    }
}