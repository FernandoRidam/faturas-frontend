import React from "react";
import { MenuItem, MenuView } from "./styles";
import { AnimatePresence } from "framer-motion";
import { useDetectClickOutside } from 'react-detect-click-outside';
import { useLocation, useNavigate } from "react-router-dom";
import { ChartBar, Invoice } from "@phosphor-icons/react";
import { Dialog } from "../../Dialog";

export interface MenuProps {
  open: boolean;
  onClose: () => void;
};

const menuItems = [
  {
    path: '/',
    label: 'Dashboard',
    Icon: ChartBar,
  },
  {
    path: '/invoices',
    label: 'Invoices',
    Icon: Invoice,
  }
];

export const LeftMenu: React.FC<MenuProps> = ({
  open,
  onClose,
}) => {
  const {
    pathname,
  } = useLocation();

  const navigate = useNavigate();

  const ref = useDetectClickOutside({
    onTriggered: () => onClose(),
  });

  const handleNavigation = ( path: string ) => {
    navigate( path );

    onClose();
  };

  return (
    <AnimatePresence>
      {
        open && (
          <Dialog
            onClose={ onClose }
          >
            <MenuView
              ref={ ref }
              initial={{
                width: 0,
              }}
              animate={{
                width: 256,
              }}
              exit={{
                width: 0,
              }}
            >
              {
                menuItems.map(({ path, Icon, label }) => (
                  <MenuItem
                    key={path}
                    $selected={ pathname === path }
                    onClick={() => handleNavigation( path )}
                  >
                    <Icon
                      size={ 24 }
                      weight={ pathname === path ? 'bold' : 'regular'}
                    />

                    <span>{ label }</span>
                  </MenuItem>
                ))
              }
            </MenuView>
          </Dialog>
        )
      }
    </AnimatePresence>
  );
};
