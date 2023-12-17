import { IGifs } from "../../@types/gifs";

export type State = {
  loading: boolean;
  data: IGifs | null;
  error?: string | null;
};

type Actions = {
  getGifDetail: (id: string) => void;
};

export type Slice = State & Actions;
