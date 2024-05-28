import { motion } from "framer-motion";
import styled from "styled-components";

export const MenuView = styled( motion.div )`
  height: 100%;
  padding-top: 72px !important;
  overflow: hidden;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND };
  color: ${({ theme }) => theme.COLORS.TEXT };
`;

export const MenuItem = styled.div<{
  $selected: boolean;
}>`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.SPACING.MEDIUM };
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_100 };
  cursor: pointer;
  transition: all .4s;
  background-color: ${({ theme, $selected }) => $selected ? theme.COLORS.SELECTED : theme.COLORS.GRAY_100 };
  margin-top: ${({ theme }) => theme.SPACING.SMALL };

  & > svg {
    min-width: ${({ theme }) => theme.FONT_SIZES.LARGE };
    min-height: ${({ theme }) => theme.FONT_SIZES.LARGE };
  }

  & > span {
    flex: 1;
    font-size: ${({ theme }) => theme.FONT_SIZES.MEDIUM };
    font-weight: ${({ theme, $selected }) => $selected ? 700 : 400 };
    color: ${({ theme }) => theme.COLORS.TEXT };
    white-space: pre;
    margin-left: ${({ theme }) => theme.SPACING.MEDIUM };
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY };
  }
`;
