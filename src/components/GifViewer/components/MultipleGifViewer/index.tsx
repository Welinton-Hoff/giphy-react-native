import React, { useCallback } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { IGifs } from "src/@types/gifs";
import { StackRoutes } from "src/@types/@react-navigation";

import * as S from "./styles";

interface IGifViewerProps {
  gif: IGifs[] | null;
}

export function MultipleGifViewer({ gif }: Readonly<IGifViewerProps>) {
  const { navigate } = useNavigation();

  const renderItem: ListRenderItem<IGifs> = useCallback(
    ({ item }) => (
      <S.Card onPress={() => onDetailPageNavigate(item?.id)}>
        <S.GifImage source={{ uri: item?.images?.fixed_width_still?.url }} />
      </S.Card>
    ),
    []
  );

  const listEmptyComponent = () => (
    <S.EmptyListContainer>
      <S.EmptyListMessage>No gifs found</S.EmptyListMessage>
    </S.EmptyListContainer>
  );

  function onDetailPageNavigate(gifId: string): void {
    navigate(StackRoutes.DetailPage, { gifId });
  }

  return (
    <S.Container>
      <FlatList
        data={gif}
        numColumns={3}
        horizontal={false}
        renderItem={renderItem}
        keyExtractor={(item) => item?.id}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={listEmptyComponent}
      />
    </S.Container>
  );
}
