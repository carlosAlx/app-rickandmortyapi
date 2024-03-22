import { useQuery } from "@tanstack/react-query";
import { getCharaterById, getCharaters } from "../apiConect";

export function useAllCharacters() {
  const query = useQuery({
    queryKey: ["character"],
    queryFn: getCharaters,
    retry: false,    
  });
  return  query;
};

export const useCharacterById = (id: number) => {
  const queryId = useQuery({
    queryKey: ["characterById", id],
    queryFn: () => getCharaterById(id),
    retry:false,
    enabled: !!id,
  });
  return queryId;
};
