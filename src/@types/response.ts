export interface IResponseSchema<T> {
  data: T;
  meta: Meta;
  pagination: Pagination;
}

export interface Meta {
  msg: string;
  status: number;
  response_id: string;
}

export interface Pagination {
  count: number;
  offset: number;
  total_count: number;
}
