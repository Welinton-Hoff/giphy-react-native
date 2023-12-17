// Generated by https://quicktype.io

export interface IGifs {
  type: EType;
  id: string;
  url: string;
  slug: string;
  user?: IUser;
  title: string;
  source: string;
  images: IImages;
  rating: ERating;
  username: string;
  bitly_url: string;
  embed_url: string;
  source_tld: string;
  is_sticker: number;
  content_url: string;
  bitly_gif_url: string;
  analytics: IAnalytics;
  source_post_url: string;
  import_datetime: string;
  trending_datetime: string;
  analytics_response_payload: string;
}

export interface IAnalytics {
  onload: Onclick;
  onsent: Onclick;
  onclick: Onclick;
}

export interface Onclick {
  url: string;
}

export interface IImages {
  hd?: The4_K;
  "4k"?: The4_K;
  preview: The4_K;
  original_mp4: The4_K;
  downsized_small: The4_K;
  downsized: The480_WStill;
  preview_gif: The480_WStill;
  preview_webp: The480_WStill;
  "480w_still": The480_WStill;
  original_still: The480_WStill;
  downsized_still: The480_WStill;
  downsized_large: The480_WStill;
  downsized_medium: The480_WStill;
  fixed_width_still: The480_WStill;
  fixed_height_still: The480_WStill;
  looping: { [key: string]: string };
  original: { [key: string]: string };
  fixed_width_small_still: The480_WStill;
  fixed_width: { [key: string]: string };
  fixed_height: { [key: string]: string };
  fixed_height_small_still: The480_WStill;
  fixed_width_small: { [key: string]: string };
  fixed_height_small: { [key: string]: string };
  fixed_width_downsampled: { [key: string]: string };
  fixed_height_downsampled: { [key: string]: string };
}

export interface The480_WStill {
  url: string;
  size: string;
  width: string;
  height: string;
}

export interface The4_K {
  mp4: string;
  width: string;
  height: string;
  mp4_size: string;
}

export enum ERating {
  G = "g",
  PG = "pg",
  PG_13 = "pg-13",
  R = "r",
}

export enum EType {
  GIF = "gif",
}

export interface IUser {
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
