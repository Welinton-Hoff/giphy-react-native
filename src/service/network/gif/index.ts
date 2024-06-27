import { AxiosResponse } from "axios";

import API from "src/service/axios";
import { API_KEY } from "src/constants";
import { IGifs } from "src/@types/gifs";
import { IResponseSchema } from "src/@types/response";

async function getGifById(
  id: string
): Promise<AxiosResponse<IResponseSchema<IGifs>>> {
  return await API.get(`/gifs/${id}?&api_key=${API_KEY}`);
}

async function getRandomGifs(): Promise<AxiosResponse<IResponseSchema<IGifs>>> {
  return await API.get(`/gifs/random?api_key=${API_KEY}`);
}

async function getSearchGifs(
  searchQuery: string
): Promise<AxiosResponse<IResponseSchema<IGifs[]>>> {
  return await API.get(`/gifs/search?q=${searchQuery}&api_key=${API_KEY}`);
}

export { getGifById, getSearchGifs, getRandomGifs };
