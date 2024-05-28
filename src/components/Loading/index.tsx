import { LoadingView } from "./styles";
import { SpinnerGap } from "@phosphor-icons/react";

export const Loading = () => {
  return (
    <LoadingView open>
      <SpinnerGap
        size={56}
        weight="bold"
      />

      <h1>Aguarde...</h1>
    </LoadingView>
  );
};
