import React, { useEffect, useMemo, useState } from "react";

import { PageView } from "../../components/PageView";
import { GifViewer } from "../../components/GifViewer";
import { FailureModal } from "../../components/FailureModal";

import { useGifDetail } from "../../zustand/gifDetail";
import { ScreenProps } from "../../@types/@react-navigation";

import { ChevronLeftIcon, Container } from "./styles";

export function DetailPage({ route }: ScreenProps<"DetailPage">) {
  const { gifId } = route?.params;
  const { data, error, loading, getGifDetail } = useGifDetail();

  const [isFailureModalVisible, updateFailureModalVisibility] = useState(false);

  const gifTitle = useMemo(() => {
    const titleLength = data?.title?.length;

    return !!titleLength && titleLength > 30
      ? `${data?.title.substring(0, 27)}...`
      : data?.title;
  }, [data?.title]);

  function onUpdateFailureModalVisibility(): void {
    updateFailureModalVisibility((oldState) => !oldState);
  }

  useEffect(() => {
    if (gifId !== "") {
      getGifDetail(gifId);
    }
  }, [gifId]);

  useEffect(() => {
    if (!!error) {
      onUpdateFailureModalVisibility();
    }
  }, [error]);

  return (
    <PageView headerTitle={gifTitle} leftIcon={ChevronLeftIcon}>
      <Container>
        <GifViewer gif={data} isLoading={loading} />
      </Container>

      <FailureModal
        message={error}
        visible={isFailureModalVisible}
        onClose={onUpdateFailureModalVisibility}
      />
    </PageView>
  );
}
