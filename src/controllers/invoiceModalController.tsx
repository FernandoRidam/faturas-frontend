import { useEffect, useState } from "react";
import { Invoice } from "../models/Invoice";
import { useStore } from "../store";
import { enqueueSnackbar } from "notistack";
import { getInvoicesByClient } from "../services/clientServices";
import { downloadFile } from "../services/fileServices";


export const useInvoiceModalController = ( id: string, open: boolean ) => {
  const {
    openLoading,
    closeLoading,
  } = useStore();

  const [ getNextPage, setGetNextpage ] = useState<boolean>( false );

  const [ page, setPage ] = useState<number>( 1 );
  const [ total, setTotal ] = useState<number>( 0 );
  const [ totalPages, setTotalPages ] = useState<number>( 0 );

  const [ invoices, setInvoices ] = useState<Array<Invoice>>([]);

  const loadInvoices = async () => {
    openLoading();

    const {
      message,
      results,
      total,
    } = await getInvoicesByClient( id, page, 15 );

    closeLoading();

    if( results ) {
      setTotal( total as number );
      setTotalPages( totalPages as number );

      if( page === 1 ) {
        setInvoices( results );
      } else {
        setInvoices(( value ) => [...value, ...( results as Array<Invoice>)]);
      }
    } else {
      enqueueSnackbar( message, {
        variant: 'error',
      });
    }
  };

  const handleDownloadPDF = async ( clientId: string, invoiceId: string ) => {
    openLoading();

    const {
      result,
      message,
    } = await downloadFile( clientId, invoiceId );

    closeLoading();

    enqueueSnackbar( message, {
      variant: result ? 'success' : 'error',
    });
  };

  useEffect(() => {
    const scrollView = document.getElementById('invoices-grid-view');

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
    if( open ) loadInvoices();
    else setInvoices([]);
  }, [ open, page ]);

  return {
    page,
    total,
    invoices,
    handleDownloadPDF,
  };
};
