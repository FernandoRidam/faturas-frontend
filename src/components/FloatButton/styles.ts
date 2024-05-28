import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  bottom: ${({ theme }) => theme.SPACING.VERY_LARGE };
  right: ${({ theme }) => theme.SPACING.VERY_LARGE };
  border: none;
  border-radius: 100%;
  padding: ${({ theme }) => theme.SPACING.MEDIUM };
  background-color: ${({ theme }) => theme.COLORS.PRIMARY };
  cursor: pointer;
  transition: all .2s;
  scale: 1;
  box-shadow: ${({ theme }) => theme.SHADOW.DEFAULT };

  &:hover {
    scale: 1.05;
  }

  &:active {
    scale: 0.95;
  }
`;
