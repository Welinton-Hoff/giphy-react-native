import { useCallback, useMemo, useRef } from "react";
import { Animated, Dimensions } from "react-native";

const ANIMATION_DURATION = 500;
const ANIMATION_DISPLACEMENT_VALUE = 100;
const SCREEN_WIDTH = Dimensions.get("screen").width - 48;

export function useSearchAnimation() {
  const animationValue = useRef(new Animated.Value(SCREEN_WIDTH)).current;

  const buttonContainerOpacity = useMemo(
    () =>
      animationValue.interpolate({
        inputRange: [SCREEN_WIDTH - ANIMATION_DISPLACEMENT_VALUE, SCREEN_WIDTH],
        outputRange: [1, 0],
      }),
    [animationValue]
  );

  const handleAnimation = useCallback(
    (isSearchFieldFocused: boolean): void => {
      const containerContracted = SCREEN_WIDTH - ANIMATION_DISPLACEMENT_VALUE;

      const containerWidth = isSearchFieldFocused
        ? containerContracted
        : SCREEN_WIDTH;

      Animated.timing(animationValue, {
        useNativeDriver: false,
        toValue: containerWidth,
        duration: ANIMATION_DURATION,
      }).start();
    },
    [animationValue]
  );

  return {
    handleAnimation,
    buttonContainerOpacity,
    searchContainerWidth: animationValue,
  };
}
