import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { Slice, State } from "./types";
import { dispatchAxiosError } from "../../utils/axios";
import { getRandomGifs, getSearchGifs } from "src/service/network/gif";

const initialState: State = {
  error: null,
  gifData: null,
  searchQuery: "",
  isFetching: false,
  isSearchActive: false,
};

export const useGifs = create<Slice>()(
  immer((set, get) => ({
    ...initialState,
    fetchGifs: async () => {
      set({ isFetching: true });

      try {
        const { searchQuery } = get();
        const { data } = await getSearchGifs(searchQuery);
        set({ gifData: data?.data, error: null });
      } catch (error) {
        set({ gifData: [], error: dispatchAxiosError(error) });
      } finally {
        setTimeout(() => set({ isFetching: false }), 500);
      }
    },
    fetchRandomGif: async () => {
      set({ isFetching: true });

      try {
        const { data } = await getRandomGifs();
        set({ gifData: data?.data, error: null });
      } catch (error) {
        set({ gifData: null, error: dispatchAxiosError(error) });
      } finally {
        set({ isFetching: false });
      }
    },
    setSearchQuery(query) {
      set({ searchQuery: query });
    },
    clearSearchData() {
      set({ gifData: null });
    },
    toggleSearch(isSearchActive) {
      set({ isSearchActive });
    },
    resetSearch() {
      set({ gifData: null, searchQuery: "", isSearchActive: false });
    },
  }))
);
