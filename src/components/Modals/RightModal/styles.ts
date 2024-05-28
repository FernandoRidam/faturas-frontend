import { motion } from "framer-motion";
import styled from "styled-components";

export const RightModalDialog = styled( motion.div )`
  display: flex;
  flex-direction: column;
  position: fixed;
  inset: 0;
  left: auto;
  overflow: hidden;
`;

export const RightModalView = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND };
  color: ${({ theme }) => theme.COLORS.TEXT };
  padding-top: 88px;
  padding-bottom: ${({ theme }) => theme.SPACING.NONE };
  overflow: hidden;

  & > span {
    white-space: nowrap;
    overflow: hidden;
    margin-left: ${({ theme }) => theme.SPACING.MEDIUM };
  }
`;

export const BackButton = styled.button`
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => `${ theme.SPACING.SMALL } ${ theme.SPACING.NONE }`};
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all .2s;
  color: ${({ theme }) => theme.COLORS.TEXT };
  margin-bottom: ${({ theme }) => theme.SPACING.MEDIUM };
  margin-left: ${({ theme }) => theme.SPACING.MEDIUM };

  &:hover {
    scale: 1.01;
  }

  &:active {
    scale: 0.99;
  }

  & > span {
    margin-left: ${({ theme }) => theme.SPACING.SMALL };
    font-size: ${({ theme }) => theme.FONT_SIZES.MEDIUM };
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    color: ${({ theme }) => theme.COLORS.TEXT };
  }
`;

export const ClientNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: ${({ theme }) => theme.SPACING.SMALL };
  margin-bottom: ${({ theme }) => theme.SPACING.MEDIUM };
  margin-right: ${({ theme }) => theme.SPACING.MEDIUM };
  color: ${({ theme }) => theme.COLORS.TEXT };

  & > strong {
    font-weight: 700;
  }

  & > strong, & > span {
    white-space: nowrap;
    overflow: hidden;
    color: ${({ theme }) => theme.COLORS.TEXT };
  }
`;

export const ListView = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${({ theme }) => `${ theme.SPACING.SMALL } ${ theme.SPACING.MEDIUM }`};
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.TEXT };

  & > a {
    margin-bottom: ${({ theme }) => theme.SPACING.MEDIUM };
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.TEXT };
  }

  & > a:last-of-type {
    margin-bottom: ${({ theme }) => theme.SPACING.NONE };
  }
`;
