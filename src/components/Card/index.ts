import styled from "styled-components";

export const Card = styled.div`
  padding: ${({ theme }) => theme.SPACING.MEDIUM };
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND };
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.MEDIUM };
  box-shadow: ${({ theme }) => theme.SHADOW.DEFAULT };
`;
