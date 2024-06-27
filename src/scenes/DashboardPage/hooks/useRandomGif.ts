import { useCallback, useEffect, useState } from "react";
import { useGifs } from "src/zustand/gifs";

type TFetchInterval = NodeJS.Timeout | number;

const FETCH_INTERVAL = 10000;

export function useRandomGif() {
  const { fetchRandomGif } = useGifs();
  const [fetchInterval, setFetchInterval] = useState<TFetchInterval>(0);

  const clearFetchInterval = useCallback(
    () => clearInterval(fetchInterval),
    [fetchInterval]
  );

  const startFetchInterval = useCallback(() => {
    fetchRandomGif();

    setFetchInterval((prevInterval) => {
      if (prevInterval) clearInterval(prevInterval);
      return setInterval(() => fetchRandomGif(), FETCH_INTERVAL);
    });
  }, [fetchRandomGif]);

  useEffect(() => {
    startFetchInterval();
    return () => clearInterval(fetchInterval);
  }, [startFetchInterval]);

  return {
    clearFetchInterval,
    fetchRandomGif: startFetchInterval,
  };
}
