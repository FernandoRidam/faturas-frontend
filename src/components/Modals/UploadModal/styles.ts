import { motion } from "framer-motion";
import styled from "styled-components";

export const UploadDialog = styled( motion.div )`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  inset: 0;
  top: auto;
  overflow: hidden;
`;

export const UploadView = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: ${({ theme }) => theme.SPACING.MEDIUM };
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND };
  color: ${({ theme }) => theme.COLORS.TEXT };
  border-radius: ${({ theme }) => `${ theme.BORDER_RADIUS.MEDIUM } ${ theme.BORDER_RADIUS.MEDIUM } 0 0`};
  width: 512px;

  & > div:first-of-type {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-weight: 500;
  }

  & > button {
    margin-top: ${({ theme }) => theme.SPACING.MEDIUM };
    align-self: center;
  }
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all .2s;

  &:hover {
    scale: 1.05;
  }

  &:active {
    scale: 0.95;
  }
`;

export const FileInputView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 72px;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.MEDIUM };
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200 };
  cursor: pointer;
  transition: all .2s;

  &:hover {
    border-color: ${({ theme }) => theme.COLORS.PRIMARY };
  }

  &:hover > span {
    color: ${({ theme }) => theme.COLORS.PRIMARY };
  }

  & > span {
    width: 100%;
    text-align: center;
    transition: all .2s;
  }
`;

export const GridViewFiles = styled.div`
  display: grid;
  flex: 1;
  max-height: 176px;
  overflow-y: auto;
  grid-template-columns: repeat( 2, 1fr );
  gap: ${({ theme }) => theme.SPACING.VERY_SMALL };
  margin: ${({ theme }) => `${ theme.SPACING.MEDIUM } ${ theme.SPACING.NONE }`};
  padding: ${({ theme }) => `${ theme.SPACING.NONE } ${ theme.SPACING.SMALL }`};
`;

export const FileView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.SPACING.SMALL };
  background-color: ${({ theme }) => theme.COLORS.SUCCESS };
  color: ${({ theme }) => theme.COLORS.TEXT };
  font-size: ${({ theme }) => theme.FONT_SIZES.SMALL };
  font-weight: 500;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.MEDIUM };
`;
