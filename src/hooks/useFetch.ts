import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { QueryFunction, useQuery } from "@tanstack/react-query";

import { dispatchAxiosError } from "src/utils/axios";
import { IResponseSchema } from "src/@types/response";

interface IFetchProps<T> {
  minFetchingTime?: number;
  queryKey: string | string[];
  fetchInFirstRender?: boolean;
  cacheTimeInMilliseconds?: number;
  queryFunction:
    | QueryFunction<AxiosResponse<IResponseSchema<T>>, string[], never>
    | undefined;
}

export function useFetch<T>(props: IFetchProps<T>) {
  const {
    queryKey,
    queryFunction,
    minFetchingTime = 0,
    cacheTimeInMilliseconds,
    fetchInFirstRender = true,
  } = props;

  const [loading, setLoading] = useState(false);

  const { data, error, isLoading, refetch, isRefetching } = useQuery({
    retry: false,
    queryFn: queryFunction,
    enabled: fetchInFirstRender,
    gcTime: cacheTimeInMilliseconds,
    queryKey: Array.isArray(queryKey) ? queryKey : [queryKey],
  });

  useEffect(() => {
    if (isLoading || isRefetching) setLoading(true);
  }, [isLoading, isRefetching]);

  useEffect(() => {
    if (data || error) setTimeout(() => setLoading(false), minFetchingTime);
  }, [data, error, minFetchingTime]);

  return {
    refetch,
    isLoading: loading,
    response: data?.data?.data,
    error: error ? dispatchAxiosError(error?.message) : null,
  };
}
