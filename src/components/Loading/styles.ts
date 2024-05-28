import styled from "styled-components";

export const LoadingView = styled.dialog`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  position: fixed;
  inset: ${({ theme }) => theme.SPACING.NONE};
  width: 100%;
  height: 100%;
  border: none;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND}E6;
  color: ${({ theme }) => theme.COLORS.PRIMARY};

  & > svg {
    margin-bottom: 16px;
    animation-name: ckw;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  @keyframes ckw {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
`;
