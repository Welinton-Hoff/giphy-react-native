import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { Slice, State } from "./types";
import { dispatchAxiosError } from "../../utils/axios";
import { getRandomGifs } from "../../service/network/randomGif";

const initialState: State = {
  data: null,
  error: null,
  loading: false,
};

export const useRandomGif = create<Slice>()(
  immer((set) => ({
    ...initialState,
    getRandomGif: async () => {
      set({ loading: true });

      try {
        await getRandomGifs().then((response) => {
          set({ error: null, data: response?.data?.data });
        });
      } catch (error) {
        set({
          data: null,
          error: dispatchAxiosError(error),
        });
      }

      set({ loading: false });
    },
  }))
);
