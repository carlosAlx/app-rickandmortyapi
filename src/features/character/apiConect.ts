import { api } from "../api";
import { Character, CharactersResponse } from "../../type/type";

export async function getCharaters(): Promise<Character[]> {
  const response = await api.get<CharactersResponse>(`/character/?page=2`);
  return response.data.results;
}

export async function getCharaterById(id: number) {
  const response = await api.get<Character>(`/character/${id}`);
  return response.data;
}
