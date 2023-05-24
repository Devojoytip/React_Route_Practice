import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export default function Post() {
  let {category, id}=useParams();
  let [searchParams, setSearchParams]= useSearchParams();
  console.log(searchParams.get('price'));
  return (
    <>
    <h1>Product - {category} </h1>
    <h1>ID: {id}</h1>
    </>
  )
}