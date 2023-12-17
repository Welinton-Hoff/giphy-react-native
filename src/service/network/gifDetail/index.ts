import { AxiosResponse } from "axios";

import API from "../../axios";
import { IGifs } from "../../../@types/gifs";
import { IResponseSchema } from "../../../@types/response";

async function getGifById(
  id: string
): Promise<AxiosResponse<IResponseSchema<IGifs>>> {
  return await API.get(
    `/gifs/${id}?&api_key=${process.env.EXPO_PUBLIC_API_KEY}`
  );
}

export { getGifById };
