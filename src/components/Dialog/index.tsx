import React from "react";
import { DialogView } from "./styles";

export interface DialogProps {
  children: React.ReactNode;
  onClose: () => void;
};

export const Dialog: React.FC<DialogProps> = ({
  children,
  onClose
}) => {
  return (
    <DialogView
      open
      onClose={ onClose }
      onCancel={ onClose }
      initial={{
        backgroundColor: `rgba(36, 36, 36, 0)`,
      }}
      animate={{
        backgroundColor: `rgba(36, 36, 36, 0.85)`,
      }}
      exit={{
        backgroundColor: `rgba(36, 36, 36, 0)`,
      }}
    >
      { children }
    </DialogView>
  );
};
