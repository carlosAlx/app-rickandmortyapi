import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Character } from "../type/type";

type CharacterActions = {
  getAll: (data: Character[]) => void;
  getById: (id: number) => void;
  characters: Character[];
  character: Character;
};

export const useCharacter = create((set, get) => ({
  getAll: () => {
    set((state: { characters: any }) => ({
      characters: [...state.characters],
    }));
  },
  getById: (id: number) => {
    set((state: { characters: any }) => ({
      characters: [...state.characters],
    }));
  },
  characters: [],
  character: {},
}));
