import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Card } from "../../components/Card";
import { Chart } from "../../components/Chart";
import { SelectClient } from "../../components/SelectClient";
import { TopPage } from "../../components/TopPage";
import { ChartsView } from "./styles"
import theme from "../../config/theme";
import { useDashboardController } from "../../controllers/dashboardController";
import { ContentView } from "../../components/ContentView";

export const Dashboard = () => {
  const {
    data,
    iOptions,
    selectedClient,
    loadClients,
    setSelectedClient,
  } = useDashboardController();

  return (
    <ContentView>
      <TopPage>
        <h1>Dashboard</h1>

        <SelectClient
          label="Filtrar por cliente"
          options={ iOptions }
          value={ selectedClient }
          onChange={( client ) => setSelectedClient( client )}
          handleLoadOptions={ loadClients }
        />
      </TopPage>

      <ChartsView>
        <Card>
          <Chart
            labels={data.map(( row ) => format(row.referenceMonth, 'LLL/yyyy', {
              locale: ptBR,
            }).toUpperCase())}
            datasets={[
              {
                label: 'Consumo de Energia Elétrica (KwH)',
                data: data.map(( row ) => row.electricityKwh + row.energySCEEKwh ),
                backgroundColor: theme.COLORS.WARNING
              },
              {
                label: 'Energia Compensada (KwH)',
                data: data.map(( row ) => row.energyGDIKwh ),
                backgroundColor: theme.COLORS.SECONDARY
              },
            ]}
          />
        </Card>

        <Card>
          <Chart
            labels={data.map(( row ) => format(row.referenceMonth, 'LLL/yyyy', {
              locale: ptBR,
            }).toUpperCase())}
            datasets={[
              {
                label: 'Valor Total sem GD (R$)',
                data: data.map(( row ) => row.electricityValue + row.energySCEEValue + row.contribution ),
                backgroundColor: theme.COLORS.ERROR,

              },
              {
                label: 'Economia GD (R$)',
                data: data.map(( row ) => Math.abs( row.energyGDIValue )),
                backgroundColor: theme.COLORS.SUCCESS,

              },
            ]}
            monetary
          />
        </Card>
      </ChartsView>
    </ContentView>
  );
};
