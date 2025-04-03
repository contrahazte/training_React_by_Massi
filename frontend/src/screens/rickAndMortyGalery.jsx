import React, { useEffect, useState } from "react";
import { rickAndMortyRepository } from "../api/repositories";

export const RickAndMortyGalery=()=>{

    const [results,setResults]=useState([])

    const getingApiInfo=async()=>{
    try{

const apiInfo=await rickAndMortyRepository.getAll()
setResults((apiInfo.data.results))
console.log(apiInfo)
}catch(e){console.error(e)}};

useEffect(()=>{getingApiInfo()},[]);
return(
    <div style={{ padding: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
{results.map((res)=> (
<div key={res.id}>
    <img src={res.image} width="150px"/>
    <p>{res.name}</p>
</div>

))}
    </div>
)
}