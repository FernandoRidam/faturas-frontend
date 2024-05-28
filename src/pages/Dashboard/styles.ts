import styled from "styled-components";

export const ChartsView = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.SPACING.LARGE };
  padding: ${({ theme }) => `${ theme.SPACING.NONE } ${ theme.SPACING.LARGE }`};

  & > div {
    flex: 1;
  }
`;
