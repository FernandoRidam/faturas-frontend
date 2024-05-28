import { AnimatePresence } from "framer-motion";
import { Dialog } from "../../Dialog";
import { useDetectClickOutside } from "react-detect-click-outside";
import { BackButton, ClientNumber, ListView, RightModalDialog, RightModalView } from "./styles";
import { CaretDoubleLeft } from "@phosphor-icons/react";
import theme from "../../../config/theme";
import { Client } from "../../../models/Client";
import { useInvoiceModalController } from "../../../controllers/invoiceModalController";
import { moneyFormat } from "../../../utils/moneyFormat";
import { InvoiceCard } from "../../InvoiceCard";
import { downloadFile } from "../../../services/fileServices";
import { format } from "date-fns";

export interface RightModalProps {
  open: boolean;
  client: Client | null;
  onClose: () => void;
};

export const RightModal: React.FC<RightModalProps> = ({
  open,
  client,
  onClose,
}) => {
  const {
    invoices,
    handleDownloadPDF,
  } = useInvoiceModalController(client?.id as string, open);

  const ref = useDetectClickOutside({
    onTriggered: () => onClose(),
  });

  return (
    <AnimatePresence>
      {
        open && (
          <Dialog
            onClose={onClose}
          >
            <RightModalDialog
              initial={{
                width: 0,
              }}
              animate={{
                width: 280,
              }}
              exit={{
                width: 0,
              }}
            >
              <RightModalView
                ref={ref}
              >
                <BackButton
                  onClick={(e) => {
                    e.stopPropagation();

                    onClose();
                  }}
                >
                  <CaretDoubleLeft
                    size={16}
                    weight="bold"
                    color={theme.COLORS.TEXT}
                  />

                  <span>Fechar</span>
                </BackButton>

                <span>Clique para baixar a fatura</span>

                <ClientNumber>
                  <strong>Nº Cliente</strong>
                  <span>{client?.number}</span>
                </ClientNumber>

                <ListView>
                  {
                    invoices.map((invoice) => (
                      <a
                        key={invoice.id}
                        href={`${process.env.REACT_APP_API_URL}/files/${client?.id}/${invoice.id}.pdf`}
                      >
                        <InvoiceCard
                          {...invoice}
                        />
                      </a>
                    ))
                  }
                </ListView>
              </RightModalView>
            </RightModalDialog>
          </Dialog>
        )
      }
    </AnimatePresence>
  );
};
