import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Login() {
    let location = useLocation();
  return (
    <>
    <h1>Login Page</h1>
    <h2>{location.state.st}</h2>
    </>
  )
}