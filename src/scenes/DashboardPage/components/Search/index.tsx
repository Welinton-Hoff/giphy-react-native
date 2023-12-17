import { Animated, Dimensions, Keyboard } from "react-native";
import React, { useCallback, useEffect, useMemo, useRef } from "react";

import { Button } from "../../../../components/Button";
import { TextField } from "../../../../components/TextField";

import useDebounce from "../../../../hooks/useDebounce";
import { useSearchGif } from "../../../../zustand/searchGif";

import {
  Container,
  SearchIcon,
  ButtonWrapper,
  TextFieldWrapper,
  ButtonViewAnimated,
  TextFieldViewAnimated,
} from "./styles";

const DEBOUNCE_VALUE = 1000;
const ANIMATION_DURATION = 300;
const ANIMATION_DISPLACEMENT_VALUE = 300;
const SCREEN_WIDTH = Dimensions.get("screen").width - 48;

interface ISearchProps {
  fieldOnBlur: () => void;
  fieldOnFocus: () => void;
  fetchInterval: () => void;
}

export function Search(props: ISearchProps) {
  const { fieldOnBlur, fieldOnFocus, fetchInterval } = props;

  const {
    searchQuery,
    getSearchGifs,
    clearSearchData,
    updateSearchQuery,
    setSearchFieldFocus,
    isSearchFieldFocused,
  } = useSearchGif();

  const debouncedValue = useDebounce<string>(searchQuery ?? "", DEBOUNCE_VALUE);
  const searchContainerAnimationValue = useRef(
    new Animated.Value(SCREEN_WIDTH)
  ).current;

  const buttonViewOpacity = useMemo(() => {
    return searchContainerAnimationValue.interpolate({
      inputRange: [SCREEN_WIDTH - ANIMATION_DISPLACEMENT_VALUE, SCREEN_WIDTH],
      outputRange: [1, 0],
    });
  }, [SCREEN_WIDTH, searchContainerAnimationValue]);

  const handleSearchContainerAnimation = useCallback((): void => {
    const searchContainerExpanded = SCREEN_WIDTH;
    const searchContainerContracted =
      searchContainerExpanded - ANIMATION_DISPLACEMENT_VALUE;

    const animationValue = isSearchFieldFocused
      ? searchContainerContracted
      : searchContainerExpanded;

    Animated.timing(searchContainerAnimationValue, {
      useNativeDriver: false,
      toValue: animationValue,
      duration: ANIMATION_DURATION,
    }).start();
  }, [SCREEN_WIDTH, isSearchFieldFocused]);

  function onClearField(): void {
    clearSearchData();
    updateSearchQuery("");
  }

  function onSearchCancel(): void {
    onClearField();
    fetchInterval();
    Keyboard.dismiss();
    setSearchFieldFocus(false);
  }

  useEffect(() => {
    handleSearchContainerAnimation();
  }, [isSearchFieldFocused]);

  useEffect(() => {
    if (debouncedValue?.length >= 2) {
      getSearchGifs(debouncedValue);
    }
  }, [debouncedValue]);

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
    <Container>
      <TextFieldViewAnimated style={{ width: searchContainerAnimationValue }}>
        <TextFieldWrapper>
          <TextField
            value={searchQuery}
            placeholder="Search"
            onBlur={fieldOnBlur}
            leftIcon={SearchIcon}
            onFocus={fieldOnFocus}
            onClear={onClearField}
            onChangeText={updateSearchQuery}
          />
        </TextFieldWrapper>
      </TextFieldViewAnimated>

      <ButtonViewAnimated style={{ opacity: buttonViewOpacity }}>
        <ButtonWrapper>
          <Button label="Cancel" onPress={onSearchCancel} />
        </ButtonWrapper>
      </ButtonViewAnimated>
    </Container>
  );
}
