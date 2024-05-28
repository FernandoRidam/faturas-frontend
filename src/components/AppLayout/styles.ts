import styled from "styled-components";
import { List, X } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export const AppLayoutView = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND };
  color: ${({ theme }) => theme.COLORS.TEXT };
`;

export const AppBar = styled.nav`
  z-index: 101;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY };
  color: ${({ theme }) => theme.COLORS.BACKGROUND };
  padding: ${({ theme }) => theme.SPACING.LARGE };
`;

export const LeftAppBarAction = styled.div`
  min-width: 32px;
`;

export const AppBarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.BACKGROUND };
  cursor: pointer;
  transition: all .2s;

  &:hover {
    scale: 1.1;
  }

  &:active {
    opacity: .9;
    scale: .9;
  }
`;

export const CloseMenu = styled(motion(X))``;

export const OpenMenu = styled(motion(List))``;

export const AppContent = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
