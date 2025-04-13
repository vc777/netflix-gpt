import React from "react";

export const checkvalidData = (email, password) => {
    

    // const isvalidName =  /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(userName);
    // let isvalidName = true;
    // if(userName){
    //     return isvalidName = /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(userName);
    // }

    const isvalidEmail =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isvalidPassword =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,20}$/.test(password);
  

    

    // if(userName && !isvalidName) return "Incorrect Name Format";
    if(!isvalidEmail) return "Email is Incorrect";
    
    if(!isvalidPassword) return "Password is Incorrect";
   
    return null;
}
