import { enqueueSnackbar } from "notistack";
import { useCallback, useEffect, useState } from "react";
import { useStore } from "../store";
import { uploadFile } from "../services/fileServices";

export const useUploadModalController = ( open: boolean, onClose: () => void ) => {
  const {
    openLoading,
    closeLoading,
  } = useStore();

  const [ files, setFiles ] = useState<Array<File>>([]);

  const addFiles = ( _files: Array<File>) => {
    const filesFiltered = _files.filter(( file ) => !files.map(( file ) => file.name ).includes( file.name ));

    setFiles(( values ) => [ ...values, ...filesFiltered ]);

    if( filesFiltered.length !== _files.length ) {
      enqueueSnackbar('Os arquivos repetidos não foram adicionados', {
        variant: 'warning',
      });
    }
  };

  const removeFile = ( _index: number ) => {
    setFiles(( values ) => values.filter(( _value, index ) => index !== _index ));
  };

  const handleSave = useCallback( async () => {
    openLoading();

    const {
      result,
      message,
    } = await uploadFile( files );

    closeLoading();

    enqueueSnackbar( message, {
      variant: result ? 'success' : 'error',
    });

    if( result ) onClose();
  }, [ files ]);

  useEffect(() => {
    if( !open ) setFiles([]);
  }, [ open ]);

  return {
    files,
    addFiles,
    removeFile,
    handleSave,
  };
};
