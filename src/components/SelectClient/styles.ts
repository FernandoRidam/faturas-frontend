import styled from 'styled-components';

import {
  motion,
} from 'framer-motion';

interface OpenProps {
  $open?: boolean;
};

interface OptionProps {
  $selected: boolean;
};

export const FieldView = styled.div`
  position: relative;
  flex: 1;

  font-size: ${({ theme }) => theme.FONT_SIZES.MEDIUM };

  user-select: none;
  -ms-user-select: none;

  & > label {
    font-size: ${({ theme }) => theme.FONT_SIZES.MEDIUM };
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.PRIMARY };

    margin-left: ${({ theme }) => theme.SPACING.VERY_SMALL };
  }
`;

export const Field = styled.div<OpenProps>`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  border-style: solid;
  border-width: 1px;
  border-radius: ${({ $open, theme }) => $open ? `${ theme.BORDER_RADIUS.MEDIUM } ${ theme.BORDER_RADIUS.MEDIUM } 0 0` : theme.BORDER_RADIUS.MEDIUM };
  padding: 0 16px;
  margin-top: ${({ theme }) => theme.SPACING.SMALL };
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND };
  border: 1px solid ${({ theme, $open: open }) => open ? theme.COLORS.PRIMARY : theme.COLORS.SECONDARY };
  border-bottom: ${({ $open: open }) => open && 'none'};
  transition: border-radius, box-shadow .2s;

  & > span:first-of-type {
    flex: 1;
  }

  & > span:last-of-type {
    margin-right: ${({ theme }) => theme.SPACING.MEDIUM };
  }
`;

export const Placeholder = styled.span`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.GRAY_200 };
  font-size: ${({ theme }) => theme.FONT_SIZES.MEDIUM };
  font-weight: 600;
`;

export const OptionsView = styled( motion.div ).attrs({
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: 'auto',
    opacity: 1,
  },
  exit: {
    height: 0,
    opacity: 0,
  },
  transition: { duration: .2 },
})<OpenProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  max-height: 168px;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY };
  border-top: none;
  border-radius: ${({ theme }) => `0 0 ${ theme.BORDER_RADIUS.MEDIUM } ${ theme.BORDER_RADIUS.MEDIUM }`};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND };

  box-shadow: ${({ theme, $open: open }) =>
    open
      ? theme.SHADOW.DEFAULT
      : 'none'
  };
`;

export const Options = styled.div`
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const IconView = styled.div<OpenProps>`
  width: 16px;
  height: 16px;
  rotate: ${({ $open = false }) => $open ? '180deg' : '0deg'};
  transition: all .4s;
`;

export const SearchView = styled.div`
  padding: ${({ theme }) => theme.SPACING.SMALL };
`;

export const Search = styled.input`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: ${({ theme }) => theme.SPACING.MEDIUM };
  border-style: solid;
  border-width: 0.1px;
  width: 100%;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.MEDIUM };
  margin-bottom: ${({ theme }) => theme.SPACING.SMALL };
  transition: all 400ms;
  background-color: transparent;

  &:focus {}

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200 };
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL };
    font-weight: 600;
  }
`;

export const Option = styled.div<OptionProps>`
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.SPACING.MEDIUM };
  transition: all .2s;
  background-color: ${({ theme, $selected }) => $selected ? theme.COLORS.SELECTED : theme.COLORS.BACKGROUND };
  cursor: pointer;

  & > span:first-of-type {
    flex: 1;
  }

  &:active {
    background-color: ${({ theme, $selected }) => $selected ? theme.COLORS.SECONDARY : theme.COLORS.BACKGROUND };
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY };
  }
`;

export const Label = styled.span`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: ${({ theme }) => theme.FONT_SIZES.MEDIUM };
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.TEXT };
`;

export const Loading = styled( motion.div ).attrs({
  initial: { rotate: '0deg'},
  animate: { rotate: '360deg'},
  transition: {
    duration: 1.6,
    repeatType: 'loop',
    repeat: Infinity,
  },
})`
  display: flex;
  align-self: center;
  padding: ${({ theme }) => theme.SPACING.SMALL };
`;
