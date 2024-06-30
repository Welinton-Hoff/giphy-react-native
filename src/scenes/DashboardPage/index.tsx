import React, { useMemo, useState, useEffect, useCallback } from "react";

import { PageView } from "src/components/PageView";
import { GifViewer } from "src/components/GifViewer";
import { SearchInput } from "./components/SearchInput";
import { FailureModal } from "src/components/FailureModal";

import { useGifs } from "src/zustand/gifs";
import { useRandomGif } from "./hooks/useRandomGif";

import * as S from "./styles";

export function DashboardPage() {
  const { fetchRandomGif, clearFetchInterval } = useRandomGif();

  const {
    error,
    gifData,
    isFetching,
    searchQuery,
    toggleSearch,
    isSearchActive,
    clearSearchData,
  } = useGifs();

  const [isFailureModalVisible, setIsFailureModalVisible] = useState(false);

  const isSearchTriggerActive = useMemo(
    () => isSearchActive || Array.isArray(gifData),
    [gifData, isSearchActive]
  );

  const title = useMemo(
    () => (isSearchTriggerActive ? "Search results:" : "Random selected GIF:"),
    [isSearchTriggerActive]
  );

  const handleSearchBehavior = useCallback(
    (isActive: boolean) => {
      clearSearchData();
      toggleSearch(isActive);
    },
    [toggleSearch, clearSearchData]
  );

  const onClearFetchInterval = useCallback(() => {
    clearFetchInterval();
    handleSearchBehavior(true);
  }, [handleSearchBehavior, clearFetchInterval]);

  const onRestartFetchInterval = useCallback(() => {
    fetchRandomGif();
    handleSearchBehavior(false);
  }, [fetchRandomGif, handleSearchBehavior]);

  const handleFetchInterval = useCallback(() => {
    if (!searchQuery && isSearchTriggerActive) onRestartFetchInterval();
  }, [searchQuery, onRestartFetchInterval, isSearchTriggerActive]);

  const onUpdateFailureModalVisibility = useCallback(() => {
    setIsFailureModalVisible((oldState) => !oldState);
  }, []);

  useEffect(() => {
    if (error) onUpdateFailureModalVisibility();
  }, [error, onUpdateFailureModalVisibility]);

  return (
    <PageView disableHeader>
      <S.Container>
        <SearchInput
          onBlur={handleFetchInterval}
          onFocus={onClearFetchInterval}
          fetchInterval={onRestartFetchInterval}
        />

        <S.TitleContainer>{title}</S.TitleContainer>
        <GifViewer gif={gifData} isLoading={isFetching} />
      </S.Container>

      <FailureModal
        message={error}
        visible={isFailureModalVisible}
        onClose={onUpdateFailureModalVisibility}
      />
    </PageView>
  );
}
