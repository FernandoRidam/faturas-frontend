import { format } from "date-fns";
import { Invoice } from "../../models/Invoice";
import { CardContent } from "./styles";
import { ptBR } from "date-fns/locale";
import { moneyFormat } from "../../utils/moneyFormat";

export interface InvoiceCardProps extends Invoice {}

export const InvoiceCard: React.FC<InvoiceCardProps> = ({
  referenceMonth,
  total,
  maturity,
}) => {
  return (
    <CardContent>
      <span>{ format( referenceMonth, 'LLL/yyyy', { locale: ptBR, }).toUpperCase()}</span>

      <div>
        <span>Valor</span>
        <span>Vencimento</span>
      </div>

      <div>
        <span>{ moneyFormat( total )}</span>
        <span>{ maturity }</span>
      </div>
    </CardContent>
  );
};
