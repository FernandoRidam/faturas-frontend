import { useDetectClickOutside } from "react-detect-click-outside";
import { Dialog } from "../../Dialog";
import { IconButton, FileInputView, FileView, GridViewFiles, UploadDialog, UploadView } from "./styles";
import { AnimatePresence } from "framer-motion";
import { X } from "@phosphor-icons/react";
import Dropzone from "react-dropzone";
import { useUploadModalController } from "../../../controllers/uploadModalController";
import theme from "../../../config/theme";
import { Button } from "../../Button";

export interface UploadModalProps {
  open: boolean;
  onClose: () => void;
};

export const UploadModal: React.FC<UploadModalProps> = ({
  open,
  onClose,
}) => {
  const {
    files,
    addFiles,
    removeFile,
    handleSave,
  } = useUploadModalController( open, onClose );

  const ref = useDetectClickOutside({
    onTriggered: () => onClose(),
  });

  return (
    <AnimatePresence>
      {
        open && (
          <Dialog
            onClose={ onClose }
          >
            <UploadDialog
              initial={{
                height: 0,
              }}
              animate={{
                height: 'auto',
              }}
              exit={{
                height: 0,
              }}
            >
              <UploadView
                ref={ ref }
              >
                <div>
                  <span>Upload de Fatura</span>

                  <IconButton
                    onClick={ onClose }
                  >
                    <X
                      size={ 16 }
                      weight="bold"
                      color={ theme.COLORS.TEXT }
                    />
                  </IconButton>
                </div>

                <GridViewFiles>
                  {
                    files.map(( file, index ) => (
                      <FileView key={ file.name }>
                        <span>{ file.name }</span>

                        <IconButton
                          onClick={( e ) => {
                            e.stopPropagation();

                            removeFile( index );
                          }}
                        >
                          <X
                            size={ 16 }
                            weight="bold"
                            color={ theme.COLORS.TEXT }
                          />
                        </IconButton>
                      </FileView>
                    ))
                  }
                </GridViewFiles>

                <Dropzone
                  onDrop={( acceptedFiles ) => addFiles( acceptedFiles )}
                  accept={{
                    'application/pdf': ['.pdf']
                  }}
                >
                  {({getRootProps, getInputProps}) => (
                    <FileInputView {...getRootProps()}>
                      <input {...getInputProps()} />
                      <span>Clique para selecionar ou arraste o(s) arquivo(s) PDF's</span>
                    </FileInputView>
                  )}
                </Dropzone>

                <Button
                  onClick={handleSave}
                >
                  Salvar
                </Button>
              </UploadView>
            </UploadDialog>
          </Dialog>
        )
      }
    </AnimatePresence>
  );
};
