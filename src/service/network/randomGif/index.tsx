import { AxiosResponse } from "axios";

import API from "../../axios";
import { IGifs } from "../../../@types/gifs";
import { IResponseSchema } from "../../../@types/response";

async function getRandomGifs(): Promise<AxiosResponse<IResponseSchema<IGifs>>> {
  return await API.get(
    `/gifs/random?api_key=${process.env.EXPO_PUBLIC_API_KEY}`
  );
}

export { getRandomGifs };
