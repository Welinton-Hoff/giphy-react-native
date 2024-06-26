import { useCallback, useEffect, useState } from "react";
import { IGifs } from "src/@types/gifs";
import { useFetch } from "src/hooks/useFetch";
import { getRandomGifs } from "src/service/network/randomGif";

type TFetchInterval = NodeJS.Timeout | number;

const FETCH_INTERVAL = 10000;

export function useRandomGif() {
  const [fetchInterval, setFetchInterval] = useState<TFetchInterval>(0);

  const { refetch, ...rest } = useFetch<IGifs>({
    queryKey: "getRandomGifs",
    cacheTimeInMilliseconds: 0,
    queryFunction: getRandomGifs,
  });

  const clearFetchInterval = useCallback(
    () => clearInterval(fetchInterval),
    [fetchInterval]
  );

  const startFetchInterval = useCallback(() => {
    refetch();

    setFetchInterval((prevInterval) => {
      if (prevInterval) clearInterval(prevInterval);
      return setInterval(() => refetch(), FETCH_INTERVAL);
    });
  }, [refetch]);

  useEffect(() => {
    startFetchInterval();
    return () => clearInterval(fetchInterval);
  }, [startFetchInterval]);

  return {
    ...rest,
    clearFetchInterval,
    fetchRandomGif: startFetchInterval,
  };
}
