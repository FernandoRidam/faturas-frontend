import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.COLORS.BACKGROUND };
  font-size: ${({ theme }) => theme.FONT_SIZES.MEDIUM };
  font-weight: 700;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY };
  border: none;
  padding: ${({ theme }) => `${ theme.SPACING.SMALL } ${ theme.SPACING.LARGE }`};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.MEDIUM };
  cursor: pointer;
  transition: all .2s;

  &:hover {
    scale: 1.05;
  }

  &:active {
    scale: 0.95;
  }
`;
