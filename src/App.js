import { useDispatch, useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, IconButton, Slide, Snackbar, StyledEngineProvider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import localforage from 'localforage';
import { LOGIN, SNACKBAR_CLOSE } from './store/actions';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (!customization.isLogin) {
            localforage.getItem('token').then((value) => {
                if (value) {
                    dispatch({ type: LOGIN, payload: value });
                } else {
                    navigate('login', { replace: true });
                }
            });
        }
    }, [customization.isLogin]);
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <Routes />
                    <Snackbar
                        open={customization.snackbarOpen}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        TransitionComponent={Slide}
                        autoHideDuration={6000}
                        onClose={() => dispatch({ type: SNACKBAR_CLOSE })}
                        message={customization.snackbarMessage}
                        action={
                            <IconButton size="small" aria-label="close" color="inherit" onClick={() => dispatch({ type: SNACKBAR_CLOSE })}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        }
                    />
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
