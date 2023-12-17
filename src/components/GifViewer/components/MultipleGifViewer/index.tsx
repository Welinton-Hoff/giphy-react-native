import React, { useCallback } from "react";
import { FlatList, Image, ListRenderItem } from "react-native";

import { Card, Container } from "./styles";
import { IGifs } from "../../../../@types/gifs";
import { useNavigation } from "@react-navigation/native";

interface IGifViewerProps {
  gif: IGifs[] | null;
}

export function MultipleGifViewer({ gif }: IGifViewerProps) {
  const navigation = useNavigation();

  const renderItem: ListRenderItem<IGifs> = useCallback(
    ({ item }) => (
      <Card onPress={() => onDetailPageNavigate(item?.id)}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: item?.images?.fixed_width_still?.url }}
        />
      </Card>
    ),
    []
  );

  function onDetailPageNavigate(gifId: string): void {
    navigation.navigate("DetailPage", {
      gifId,
    });
  }

  return (
    <Container>
      <FlatList
        data={gif}
        numColumns={3}
        horizontal={false}
        renderItem={renderItem}
        keyExtractor={(item) => item?.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
