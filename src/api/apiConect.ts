import axios from "axios";
import { api } from "./apiUrl";
import { Root } from "../type/type";

export async function getCharaters() {
  const response = await api.get<Root>(`/character/?page=2`);
  return response.data.results;
}
