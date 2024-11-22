import {create} from 'zustand';

interface ICardStore {
    cards: object[];
    fetchCards: () => void;
  }


  export const useStore = create<ICardStore>()((set, get) => ({
    cards: [],
    fetchCards: async () => {
      try {
        
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  }));
  