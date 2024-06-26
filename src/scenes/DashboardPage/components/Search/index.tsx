import { Keyboard } from "react-native";
import React, { useCallback, useEffect } from "react";

import { Button } from "src/components/Button";
import { TextField } from "src/components/TextField";

import { useDebounce } from "src/hooks/useDebounce";
import { useSearchGif } from "src/zustand/searchGif";
import { useSearchAnimation } from "./hooks/useSearchAnimation";

import * as S from "./styles";

interface ISearchProps {
  fieldOnBlur: () => void;
  fieldOnFocus: () => void;
  fetchInterval: () => void;
}

export function Search(props: Readonly<ISearchProps>) {
  const { fieldOnBlur, fieldOnFocus, fetchInterval } = props;

  const {
    searchQuery,
    getSearchGifs,
    clearSearchData,
    updateSearchQuery,
    setSearchFieldFocus,
    isSearchFieldFocused,
  } = useSearchGif();

  const { handleAnimation, searchContainerWidth, buttonContainerOpacity } =
    useSearchAnimation();

  const debouncedValue = useDebounce<string>(searchQuery ?? "");

  const onClearField = useCallback((): void => {
    clearSearchData();
    updateSearchQuery("");
  }, [clearSearchData, updateSearchQuery]);

  const onSearchCancel = useCallback((): void => {
    onClearField();
    fetchInterval();
    Keyboard.dismiss();
    setSearchFieldFocus(false);
  }, [onClearField, fetchInterval, setSearchFieldFocus]);

  useEffect(() => {
    handleAnimation(isSearchFieldFocused);
  }, [isSearchFieldFocused, handleAnimation]);

  useEffect(() => {
    if (debouncedValue?.length >= 2) getSearchGifs(debouncedValue);
  }, [debouncedValue, getSearchGifs]);

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
      <S.TextFieldViewAnimated style={{ width: searchContainerWidth }}>
        <S.TextFieldWrapper>
          <TextField
            value={searchQuery}
            placeholder="Search"
            onBlur={fieldOnBlur}
            leftIcon={S.SearchIcon}
            onFocus={fieldOnFocus}
            onClear={onClearField}
            onChangeText={updateSearchQuery}
          />
        </S.TextFieldWrapper>
      </S.TextFieldViewAnimated>

      <S.ButtonViewAnimated style={{ opacity: buttonContainerOpacity }}>
        <S.ButtonWrapper>
          <Button label="Cancel" onPress={onSearchCancel} />
        </S.ButtonWrapper>
      </S.ButtonViewAnimated>
    </S.Container>
  );
}
