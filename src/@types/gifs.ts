export enum EGifRating {
  G = "g",
  R = "r",
  PG = "pg",
  PG_13 = "pg-13",
}

enum EGifType {
  GIF = "gif",
}

export interface IGifs {
  id: string;
  url: string;
  slug: string;
  title: string;
  source: string;
  type: EGifType;
  user?: IGifUser;
  username: string;
  bitly_url: string;
  embed_url: string;
  rating: EGifRating;
  images: IGifImages;
  source_tld: string;
  is_sticker: number;
  content_url: string;
  bitly_gif_url: string;
  source_post_url: string;
  import_datetime: string;
  analytics: IGifAnalytics;
  trending_datetime: string;
  analytics_response_payload: string;
}

interface IGifAnalytics {
  onload: IGifAnalyticsClick;
  onsent: IGifAnalyticsClick;
  onclick: IGifAnalyticsClick;
}

interface IGifAnalyticsClick {
  url: string;
}

interface IGifImages {
  hd?: IGifFourK;
  "4k"?: IGifFourK;
  preview: IGifFourK;
  original_mp4: IGifFourK;
  downsized: IThe480WStill;
  downsized_small: IGifFourK;
  preview_gif: IThe480WStill;
  preview_webp: IThe480WStill;
  "480w_still": IThe480WStill;
  original_still: IThe480WStill;
  downsized_still: IThe480WStill;
  downsized_large: IThe480WStill;
  downsized_medium: IThe480WStill;
  fixed_width_still: IThe480WStill;
  fixed_height_still: IThe480WStill;
  looping: { [key: string]: string };
  original: { [key: string]: string };
  fixed_width_small_still: IThe480WStill;
  fixed_width: { [key: string]: string };
  fixed_height: { [key: string]: string };
  fixed_height_small_still: IThe480WStill;
  fixed_width_small: { [key: string]: string };
  fixed_height_small: { [key: string]: string };
  fixed_width_downsampled: { [key: string]: string };
  fixed_height_downsampled: { [key: string]: string };
}

interface IThe480WStill {
  url: string;
  size: string;
  width: string;
  height: string;
}

interface IGifFourK {
  mp4: string;
  width: string;
  height: string;
  mp4_size: string;
}

interface IGifUser {
  username: string;
  avatar_url: string;
  banner_url: string;
  profile_url: string;
  description: string;
  website_url: string;
  banner_image: string;
  display_name: string;
  is_verified: boolean;
  instagram_url: string;
}
