import { EGifRating } from "../../@types/gifs";

function getRatingAge(rating: EGifRating) {
  const ratingTemplate = {
    [EGifRating.G]: "0 +",
    [EGifRating.R]: "18 +",
    [EGifRating.PG]: "12 +",
    [EGifRating.PG_13]: "16 +",
  };

  return ratingTemplate[rating];
}

export { getRatingAge };
