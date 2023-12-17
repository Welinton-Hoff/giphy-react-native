import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { Slice, State } from "./types";
import { dispatchAxiosError } from "../../utils/axios";
import { getGifById } from "../../service/network/gifDetail";

const initialState: State = {
  data: null,
  error: null,
  loading: false,
};

export const useGifDetail = create<Slice>()(
  immer((set) => ({
    ...initialState,
    getGifDetail: async (id: string) => {
      set({ loading: true });

      try {
        await getGifById(id).then((response) => {
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
