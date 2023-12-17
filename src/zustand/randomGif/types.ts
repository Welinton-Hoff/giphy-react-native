import { IGifs } from "../../@types/gifs";

export type State = {
  loading: boolean;
  data: IGifs | null;
  error?: string | null;
};

type Actions = {
  getRandomGif: () => void;
};

export type Slice = State & Actions;
