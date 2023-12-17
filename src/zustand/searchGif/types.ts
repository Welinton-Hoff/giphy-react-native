import { IGifs } from "../../@types/gifs";

export type State = {
  loading: boolean;
  searchQuery: string;
  data: IGifs[] | null;
  error?: string | null;
  isSearchFieldFocused: boolean;
};

type Actions = {
  clearSearchData: () => void;
  getSearchGifs: (searchQuery: string) => void;
  updateSearchQuery: (searchQuery: string) => void;
  setSearchFieldFocus: (isFocused: boolean) => void;
};

export type Slice = State & Actions;
