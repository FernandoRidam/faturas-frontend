import {
  useState,
} from "react";

import {
  AnimatePresence,
} from "framer-motion";

import {
  Outlet,
} from "react-router-dom";

import {
  LeftMenu,
} from "../Modals/LeftMenu";

import {
  AppBar,
  AppBarButton,
  AppContent,
  AppLayoutView,
  CloseMenu,
  LeftAppBarAction,
  OpenMenu,
} from "./styles";

export const AppLayout = () => {
  const [ showMenu, setShowMenu ] = useState<boolean>( false );

  return (
    <AppLayoutView>
      <AppBar>
        <LeftAppBarAction>
        <AppBarButton
              onClick={( e ) => {
                e.stopPropagation();

                setShowMenu(( value ) => !value );
              }}
            >
              <AnimatePresence>
                {
                  showMenu ? (
                    <CloseMenu
                      size={24}
                      weight="bold"
                      initial={{
                        scale: 0,
                      }}
                      animate={{
                        scale: 1,
                      }}
                      exit={{
                        scale: 0,
                      }}
                    />
                  ) : (
                    <OpenMenu
                      size={24}
                      weight="bold"
                      initial={{
                        scale: 0,
                      }}
                      animate={{
                        scale: 1,
                      }}
                      exit={{
                        scale: 0,
                      }}
                    />
                  )
                }
              </AnimatePresence>
            </AppBarButton>
        </LeftAppBarAction>

        <h1>Lumi Faturas</h1>

        <div />
      </AppBar>

      <AppContent>
        <Outlet />
      </AppContent>

      <LeftMenu
        open={showMenu}
        onClose={() => setShowMenu(false)}
      />
    </AppLayoutView>
  );
};
