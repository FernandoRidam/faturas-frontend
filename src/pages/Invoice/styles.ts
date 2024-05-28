import styled from "styled-components";

export const GridView = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: repeat( 4, 1fr );
  gap: ${({ theme }) => theme.SPACING.VERY_LARGE };
  padding: ${({ theme }) => `${ theme.SPACING.MEDIUM } ${ theme.SPACING.LARGE }`};
  padding-bottom: ${({ theme }) => theme.SPACING.NONE };
  overflow-y: auto;
`;

export const Empty = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.FONT_SIZES.LARGE };
  font-weight: 500;
`;
