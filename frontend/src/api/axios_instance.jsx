import axios from "axios";


export const rickAndMortyInstance =axios.create({
baseURL:"https://rickandmortyapi.com/api",
headers: {"Content-Type":"application/json"}

})