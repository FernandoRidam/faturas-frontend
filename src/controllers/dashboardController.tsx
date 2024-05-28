import { useEffect, useState } from "react";
import { useStore } from "../store";
import { getDashboardData } from "../services/dashboardServices";
import { DashboardDataRow } from "../models/Dashboard";
import { enqueueSnackbar } from "notistack";
import { Client } from "../models/Client";
import { getClients } from "../services/clientServices";
import { IOptions } from "../types/IOptions";


export const useDashboardController = () => {
  const {
    openLoading,
    closeLoading,
  } = useStore();

  const [ data, setData ] = useState<Array<DashboardDataRow>>([]);

  const [ iOptions, setIOptions ] = useState<IOptions>({
    data: [],
    total: 0,
  });

  const [ selectedClient, setSelectedClient ] = useState<Client | null>( null );

  const loadDashboardData = async () => {
    openLoading();

    const {
      result: data,
      message,
    } = await getDashboardData( selectedClient?.id ?? "");

    closeLoading();

    if( data ) {
      setData( data );
    } else {
      enqueueSnackbar( message, {
        variant: 'error',
      });
    }
  };

  const loadClients = async ( search: string, page: number ) => {
    openLoading();

    const {
      results,
      total,
      message,
    } = await getClients( search, page, 10 );

    closeLoading();

    if( results ) {
      setIOptions(( value ) => {
        return {
          data: page === 1 ? results : [...value.data, ...(results ?? [])],
          total: total as number,
        };
      });
    }  else {
      enqueueSnackbar( message, {
        variant: 'error',
      });
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, [ selectedClient ]);

  return {
    data,
    iOptions,
    selectedClient,
    loadClients,
    setSelectedClient,
  };
};
