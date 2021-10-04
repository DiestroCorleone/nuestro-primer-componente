import React from 'react';

export default function HolaMundo(){

  const miFuncion = () =>{
    console.log("Mi funcion");
  }
  
  return(
    <div>
      <h1>Hola Mundo!</h1>
      <h2>El Diestripo</h2>
    </div>
  )
}

export function AdiosMundo(){
  return(
    <div>
      <h3>Adios</h3>
    </div>
  )
}
