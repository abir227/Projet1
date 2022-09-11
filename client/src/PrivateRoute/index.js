import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import M from 'materialize-css' 
const jwt=localStorage.getItem('jwt')
const PrivateRoute= (({children})=>{
   
    
    return jwt ? children :<Navigate to={'/signin'}/> 

})
export default PrivateRoute;

