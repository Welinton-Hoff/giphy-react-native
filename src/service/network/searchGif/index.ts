import { AxiosResponse } from "axios";

import API from "../../axios";
import { IGifs } from "../../../@types/gifs";
import { IResponseSchema } from "../../../@types/response";

async function getSearchGifs(
  searchQuery: string
): Promise<AxiosResponse<IResponseSchema<IGifs[]>>> {
  return await API.get(
    `/gifs/search?q=${searchQuery}&api_key=${process.env.EXPO_PUBLIC_API_KEY}`
  );
}

export { getSearchGifs };
