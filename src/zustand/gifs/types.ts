import { IGifs } from "../../@types/gifs";

export type State = {
  isFetching: boolean;
  searchQuery: string;
  error?: string | null;
  isSearchActive: boolean;
  gifData: IGifs | IGifs[] | null;
};

type Actions = {
  resetSearch: () => void;
  clearSearchData: () => void;
  fetchGifs: () => Promise<void>;
  fetchRandomGif: () => Promise<void>;
  setSearchQuery: (query: string) => void;
  toggleSearch: (isSearchActive: boolean) => void;
};

export type Slice = State & Actions;
