import { rickAndMortyInstance } from "./axios_instance";
import { API_ROUTES } from "./api_routes";

export const rickAndMortyRepository={
    getAll:()=>rickAndMortyInstance.get(API_ROUTES.character.base),
    getById:(id)=>rickAndMortyInstance.get(API_ROUTES.character.byId(id))
}