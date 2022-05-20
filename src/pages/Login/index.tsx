import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import FormLogin from '../../components/FormLogin';

export default function Login() {
  let navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem('token');
    if(token){
      navigate('/home');
    }
  }, [])
  return (
    <FormLogin /> 
  )
}

