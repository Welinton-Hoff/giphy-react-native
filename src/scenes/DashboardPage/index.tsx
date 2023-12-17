import React, { useMemo, useState, useEffect, useCallback } from "react";

import { Search } from "./components/Search";
import { PageView } from "../../components/PageView";
import { GifViewer } from "../../components/GifViewer";
import { FailureModal } from "../../components/FailureModal";

import { useRandomGif } from "../../zustand/randomGif";
import { useSearchGif } from "../../zustand/searchGif";

import { Container, TitleContainer } from "./styles";

const FETCH_INTERVAL = 10000;

export function DashboardPage() {
  const {
    getRandomGif,
    data: randomGifData,
    error: randomGifError,
  } = useRandomGif();

  const {
    searchQuery,
    clearSearchData,
    data: searchData,
    error: searchError,
    setSearchFieldFocus,
    isSearchFieldFocused,
    loading: searchLoading,
  } = useSearchGif();

  const [isFailureModalVisible, updateFailureModalVisibility] = useState(false);
  const [fetchInterval, updateFetchInterval] = useState<
    NodeJS.Timeout | number
  >(0);

  const hasApiError = useMemo(() => {
    return (
      (!!searchError && searchError !== "") ||
      (!!randomGifError && randomGifError !== "")
    );
  }, [searchError, randomGifError]);

  const isSearchTriggerActive = useMemo(() => {
    return isSearchFieldFocused || !!searchData?.length;
  }, [searchData, isSearchFieldFocused]);

  const gifViewerData = useMemo(() => {
    return isSearchTriggerActive ? searchData : randomGifData;
  }, [searchData, randomGifData, isSearchTriggerActive]);

  const title = useMemo(() => {
    return isSearchTriggerActive ? "Search results:" : "Random selected GIF:";
  }, [isSearchTriggerActive]);

  const onClearFetchInterval = useCallback(() => {
    clearInterval(fetchInterval);
    setSearchFieldFocus(true);
  }, [fetchInterval]);

  const handleFetchInterval = useCallback((): void => {
    if (searchQuery === "" && isSearchTriggerActive) {
      onStartFetchInterval();
    }
  }, [searchQuery, isSearchTriggerActive]);

  function onStartFetchInterval(): void {
    getRandomGif();
    clearSearchData();
    setSearchFieldFocus(false);

    const newInterval = setInterval(() => {
      getRandomGif();
    }, FETCH_INTERVAL);

    updateFetchInterval(newInterval);
  }

  function onUpdateFailureModalVisibility(): void {
    updateFailureModalVisibility((oldState) => !oldState);
  }

  useEffect(() => {
    getRandomGif();

    const newFetchInterval = setInterval(() => {
      getRandomGif();
    }, FETCH_INTERVAL);

    updateFetchInterval(newFetchInterval);

    return () => clearInterval(newFetchInterval);
  }, []);

  useEffect(() => {
    if (!!hasApiError) {
      onUpdateFailureModalVisibility();
    }
  }, [hasApiError]);

  return (
    <PageView disableHeader>
      <Container>
        <Search
          fieldOnBlur={handleFetchInterval}
          fieldOnFocus={onClearFetchInterval}
          fetchInterval={onStartFetchInterval}
        />

        <TitleContainer>{title}</TitleContainer>
        <GifViewer gif={gifViewerData} isLoading={searchLoading} />
      </Container>

      <FailureModal
        visible={isFailureModalVisible}
        message={randomGifError || searchError}
        onClose={onUpdateFailureModalVisibility}
      />
    </PageView>
  );
}
