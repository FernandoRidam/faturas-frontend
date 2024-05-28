import theme from "../../config/theme";
import { Button } from "./styles";
import { Icon } from "@phosphor-icons/react";

export interface FloatButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  Icon: Icon;
}

export const FloatButton: React.FC<FloatButtonProps> = ({
  Icon,
  onClick = () => {},
}) => {
  return (
    <Button
      onClick={( e ) => {
        e.stopPropagation();

        onClick( e );
      }}
    >
      <Icon
        size={ 32 }
        weight="bold"
        color={ theme.COLORS.BACKGROUND }
      />
    </Button>
  );
};
