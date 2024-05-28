import { Client } from "../../models/Client";
import { CardContent } from "./styles";

export interface ClientCardProps extends Client {
  onClick: () => void;
}

export const ClientCard: React.FC<ClientCardProps> = ({
  name,
  number,
  installation,
  onClick,
}) => {
  return (
    <CardContent onClick={( e ) => {
      e.stopPropagation();

      onClick();
    }}>
      <span>{ name }</span>

      <div>
        <span>Nº do Cliente</span>
        <span>Instalação</span>
      </div>

      <div>
        <span>{ number }</span>
        <span>{ installation }</span>
      </div>
    </CardContent>
  );
};
