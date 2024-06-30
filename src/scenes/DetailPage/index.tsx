import React, { useEffect, useState } from "react";

import { PageView } from "src/components/PageView";
import { GifViewer } from "src/components/GifViewer";
import { FailureModal } from "src/components/FailureModal";

import { IGifs } from "src/@types/gifs";
import { useFetch } from "src/hooks/useFetch";
import { getGifById } from "src/service/network/gif";
import { ScreenProps, StackRoutes } from "src/@types/@react-navigation";

import { ChevronLeftIcon, Container } from "./styles";

export function DetailPage({
  route,
}: Readonly<ScreenProps<StackRoutes.DetailPage>>) {
  const { gifId } = route.params;

  const [isFailureModalVisible, setIsFailureModalVisible] = useState(false);

  const { error, response, isLoading } = useFetch<IGifs>({
    queryKey: "getGifById",
    queryFunction: () => getGifById(gifId),
  });

  const onUpdateFailureModalVisibility = () => {
    setIsFailureModalVisible((oldState) => !oldState);
  };

  useEffect(() => {
    if (error) onUpdateFailureModalVisibility();
  }, [error]);

  return (
    <PageView headerTitle={response?.title} leftIcon={ChevronLeftIcon}>
      <Container>
        <GifViewer gif={response} isLoading={isLoading} />
      </Container>

      <FailureModal
        message={error}
        visible={isFailureModalVisible}
        onClose={onUpdateFailureModalVisibility}
      />
    </PageView>
  );
}
