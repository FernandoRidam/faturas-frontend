import { Plus } from "@phosphor-icons/react";
import { ClientCard } from "../../components/ClientCard";
import { ContentView } from "../../components/ContentView";
import { FloatButton } from "../../components/FloatButton";
import { TopPage } from "../../components/TopPage";
import { useInvoiceController } from "../../controllers/invoiceController";
import { Empty, GridView } from "./styles";
import { UploadModal } from "../../components/Modals/UploadModal";
import { RightModal } from "../../components/Modals/RightModal";

export const Invoice = () => {
  const {
    clients,
    openUploadModal,
    openInvoicesModal,
    selectedClient,
    onOpenUploadModal,
    onOpenClientModal,
    onCloseModal,
  } = useInvoiceController();

  return (
    <>
      <ContentView>
        <TopPage>
          <h1>Biblioteca de Faturas</h1>
        </TopPage>

        {
          clients.length > 0
            ? (
              <GridView id="clients-grid-view">
                {
                  clients.map((client) => (
                    <ClientCard
                      key={client.id}
                      {...client}
                      onClick={() => onOpenClientModal( client )}
                    />
                  ))
                }
              </GridView>
            )
            : (
              <Empty>
                <span>Nenhum Cliente Cadastrado</span>
              </Empty>
            )
        }

        <FloatButton
          Icon={ Plus }
          onClick={ onOpenUploadModal }
        />
      </ContentView>

      <UploadModal
        open={ openUploadModal }
        onClose={ onCloseModal }
      />

      <RightModal
        open={ openInvoicesModal }
        client={ selectedClient }
        onClose={ onCloseModal }
      />
    </>
  );
};
