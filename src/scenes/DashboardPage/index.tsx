import React, { useMemo, useState, useEffect, useCallback } from "react";

import { Search } from "./components/Search";
import { PageView } from "../../components/PageView";
import { GifViewer } from "../../components/GifViewer";
import { FailureModal } from "../../components/FailureModal";

import { useSearchGif } from "../../zustand/searchGif";

import * as S from "./styles";
import { useRandomGif } from "./hooks/useRandomGif";

export function DashboardPage() {
  const { error, response, fetchRandomGif, clearFetchInterval } =
    useRandomGif();

  const {
    searchQuery,
    clearSearchData,
    data: searchData,
    error: searchError,
    setSearchFieldFocus,
    isSearchFieldFocused,
    loading: searchLoading,
  } = useSearchGif();

  const [isFailureModalVisible, setIsFailureModalVisible] = useState(false);

  const hasApiError = useMemo(() => {
    return (!!searchError && searchError !== "") || error;
  }, [searchError, error]);

  const isSearchTriggerActive = useMemo(() => {
    return isSearchFieldFocused || !!searchData?.length;
  }, [searchData, isSearchFieldFocused]);

  const gifViewerData = useMemo(() => {
    return isSearchTriggerActive ? searchData : response;
  }, [searchData, response, isSearchTriggerActive]);

  const title = useMemo(() => {
    return isSearchTriggerActive ? "Search results:" : "Random selected GIF:";
  }, [isSearchTriggerActive]);

  const onClearFetchInterval = useCallback(() => {
    clearFetchInterval();
    setSearchFieldFocus(true);
  }, [clearFetchInterval]);

  const onRestartFetchInterval = useCallback(() => {
    fetchRandomGif();
    clearSearchData();
    setSearchFieldFocus(false);
  }, [fetchRandomGif, clearSearchData]);

  const handleFetchInterval = useCallback((): void => {
    if (!searchQuery && isSearchTriggerActive) onRestartFetchInterval();
  }, [searchQuery, onRestartFetchInterval, isSearchTriggerActive]);

  function onUpdateFailureModalVisibility(): void {
    setIsFailureModalVisible((oldState) => !oldState);
  }

  useEffect(() => {
    if (hasApiError) onUpdateFailureModalVisibility();
  }, [hasApiError]);

  return (
    <PageView disableHeader>
      <S.Container>
        <Search
          fieldOnBlur={handleFetchInterval}
          fieldOnFocus={onClearFetchInterval}
          fetchInterval={onRestartFetchInterval}
        />

        <S.TitleContainer>{title}</S.TitleContainer>
        <GifViewer gif={gifViewerData} isLoading={searchLoading} />
      </S.Container>

      <FailureModal
        message={error ?? searchError}
        visible={isFailureModalVisible}
        onClose={onUpdateFailureModalVisibility}
      />
    </PageView>
  );
}
