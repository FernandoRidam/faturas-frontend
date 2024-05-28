import { useEffect, useState } from "react";
import { Client } from "../models/Client";
import { useStore } from "../store";
import { enqueueSnackbar } from "notistack";
import { getClients } from "../services/clientServices";


export const useInvoiceController = () => {
  const {
    openLoading,
    closeLoading,
  } = useStore();

  const [ getNextPage, setGetNextpage ] = useState<boolean>( false );

  const [ openUploadModal, setOpenUploadModal ] = useState<boolean>( false );

  const [ openInvoicesModal, setOpenInvoicesModal ] = useState<boolean>( false );
  const [ selectedClient, setSelectedClient ] = useState<Client | null>( null );

  const [ page, setPage ] = useState<number>( 1 );
  const [ total, setTotal ] = useState<number>( 0 );
  const [ totalPages, setTotalPages ] = useState<number>( 0 );

  const [ search, setSearch ] = useState<string>('');

  const [ clients, setClients ] = useState<Array<Client>>([]);

  const loadClients = async () => {
    openLoading();

    const {
      message,
      results,
      total,
    } = await getClients( search, page, 15 );

    closeLoading();

    if( results ) {
      setTotal( total as number );
      setTotalPages( totalPages as number );

      if( page === 1 ) {
        setClients( results );
      } else {
        setClients(( value ) => [...value, ...( results as Array<Client>)]);
      }
    } else {
      enqueueSnackbar( message, {
        variant: 'error',
      });
    }
  };

  const handleCloseModal = () => {
    setOpenUploadModal( false );
    setOpenInvoicesModal( false );
    setSelectedClient( null );

    setPage( 1 );
    setTotal( 0 );
    setTotalPages( 0 );
    setClients([]);

    loadClients();
  };

  useEffect(() => {
    if( search ) {
      setPage( 1 );
      setTotal( 0 );
      setClients([]);
    }
  }, [ search ]);

  useEffect(() => {
    const scrollView = document.getElementById('clients-grid-view');

    const scrollFunction = () => {
      if( scrollView ) {
        if ( scrollView?.scrollTop + scrollView?.clientHeight >= scrollView?.scrollHeight ) {
          setGetNextpage( true );
        }
      }
    }

    scrollView?.addEventListener('scroll', scrollFunction );

    return () => scrollView?.removeEventListener('scroll', scrollFunction );
  }, []);

  useEffect(() => {
    if( getNextPage ) {
      if( page < totalPages ) setPage(( page ) => page + 1 );

      setGetNextpage( false );
    }
  }, [ getNextPage ]);

  useEffect(() => {
    loadClients();
  }, [ page, search ]);

  return {
    page,
    total,
    clients,
    openUploadModal,
    openInvoicesModal,
    selectedClient,
    onOpenClientModal: ( client: Client | null ) => {
      setOpenInvoicesModal( true );

      setSelectedClient( client );
    },
    onOpenUploadModal: () => setOpenUploadModal( true ),
    onCloseModal: handleCloseModal,
    setSearch,
  };
};
