import React, { useCallback, useEffect } from "react";
import { Animated, Keyboard, TextInputProps } from "react-native";

import { Button } from "src/components/Button";
import { TextField } from "src/components/TextField";

import { useDebounce } from "src/hooks/useDebounce";
import { useSearchAnimation } from "./hooks/useSearchAnimation";

import * as S from "./styles";
import { useGifs } from "src/zustand/gifs";

interface ISearchProps extends TextInputProps {
  fetchInterval: () => void;
}

export function SearchInput(props: Readonly<ISearchProps>) {
  const { fetchInterval, ...rest } = props;
  const { handleAnimation, searchContainerWidth, buttonContainerOpacity } =
    useSearchAnimation();

  const {
    fetchGifs,
    searchQuery,
    resetSearch,
    setSearchQuery,
    isSearchActive,
    clearSearchData,
  } = useGifs();

  const debouncedValue = useDebounce<string>(searchQuery ?? "");

  const onSearchCancel = useCallback((): void => {
    resetSearch();
    fetchInterval();
    Keyboard.dismiss();
  }, [resetSearch, fetchInterval]);

  const onSearchClear = useCallback((): void => {
    setSearchQuery("");
  }, [setSearchQuery, clearSearchData]);

  useEffect(() => {
    handleAnimation(isSearchActive);
  }, [isSearchActive, handleAnimation]);

  useEffect(() => {
    if (debouncedValue?.length >= 2) fetchGifs();
  }, [debouncedValue, fetchGifs]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {}
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {}
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <S.Container>
      <Animated.View style={{ width: searchContainerWidth }}>
        <TextField
          {...rest}
          value={searchQuery}
          placeholder="Search"
          leftIcon={S.SearchIcon}
          onClear={onSearchClear}
          onChangeText={setSearchQuery}
        />
      </Animated.View>

      <S.ButtonViewAnimated style={{ opacity: buttonContainerOpacity }}>
        <S.ButtonWrapper>
          <Button label="Cancel" onPress={onSearchCancel} />
        </S.ButtonWrapper>
      </S.ButtonViewAnimated>
    </S.Container>
  );
}
