import styled, { ThemeProvider } from 'styled-components';
import { MaterialDesignContent, SnackbarProvider } from 'notistack';
import { RouterProvider } from 'react-router-dom';

import { StateProvider, useStore } from './store';
import theme from './config/theme';
import { Loading } from './components/Loading';
import appRouter from "./routers/appRouter";

import './index.css';

const autoHideDuration = 2000;

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-success': {
    backgroundColor: theme.COLORS.SUCCESS,
  },
  '&.notistack-MuiContent-warning': {
    backgroundColor: theme.COLORS.WARNING,
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: theme.COLORS.ERROR,
  },
}));

function App() {
  return (
    <StateProvider>
      <ThemeProvider theme={ theme }>
        <SnackbarProvider
          autoHideDuration={ autoHideDuration }
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          maxSnack={ 3 }
          Components={{
            success: StyledMaterialDesignContent,
            default: StyledMaterialDesignContent,
            error: StyledMaterialDesignContent,
            warning: StyledMaterialDesignContent,
          }}
        >
          <Content />
        </SnackbarProvider>
      </ThemeProvider>
    </StateProvider>
  );
}

function Content() {
  const {
    loading,
  } = useStore();

  return (
    <>
      <RouterProvider
        router={ appRouter }
      />

      {
        loading && (<Loading />)
      }
    </>
  );
  ;
}

export default App;
