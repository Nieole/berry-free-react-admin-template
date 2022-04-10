import { useDispatch, useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import localforage from 'localforage';
import { LOGIN } from './store/actions';
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
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
