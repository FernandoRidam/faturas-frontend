import styled from "styled-components";

export const TopPage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: ${({ theme }) => theme.SPACING.LARGE };
  padding: ${({ theme }) => theme.SPACING.LARGE };

  & h1 {
    flex: 1;
  }
`;
