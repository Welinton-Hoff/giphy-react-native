import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { Slice, State } from "./types";
import { dispatchAxiosError } from "../../utils/axios";
import { getSearchGifs } from "../../service/network/searchGif";

const initialState: State = {
  data: null,
  error: null,
  loading: false,
  searchQuery: "",
  isSearchFieldFocused: false,
};

export const useSearchGif = create<Slice>()(
  immer((set) => ({
    ...initialState,
    getSearchGifs: async (searchQuery: string) => {
      set({ loading: true });

      try {
        await getSearchGifs(searchQuery).then((response) => {
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
    clearSearchData: () => {
      set({ data: null });
    },
    updateSearchQuery: (searchQuery: string) => {
      set({ searchQuery });
    },
    setSearchFieldFocus: (isSearchFieldFocused: boolean) => {
      set({ isSearchFieldFocused });
    },
  }))
);
