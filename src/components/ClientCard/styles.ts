import styled from "styled-components";
import { Card } from "../Card";

export const CardContent = styled( Card )`
  display: flex;
  flex-direction: column;
  max-width: 290px;
  height: 96px;
  cursor: pointer;
  transition: all .2s;
  font-size: ${({ theme }) => theme.FONT_SIZES.MEDIUM };
  font-weight: 700;

  &:hover {
    scale: 1.03;
  }

  &:active {
    scale: 0.97;
  }

  & > span:first-of-type {
    flex: 1;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL };
    font-weight: 400;
  }

  & > div > span {
    flex: 1;
  }
`;
