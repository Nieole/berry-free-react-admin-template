import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Typography, useMediaQuery } from '@mui/material';

// project imports
import AuthWrapper from '../AuthWrapper';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthLogin from '../auth-forms/AuthLogin';

// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = () => (
    <AuthWrapper>
        <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                    <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                        <AuthCardWrapper>
                            <Grid container spacing={2} alignItems="center" justifyContent="center">
                                <Grid item sx={{ mb: 3 }}>
                                    <Typography variant="h3">用户登录</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <AuthLogin />
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider />
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid item container direction="column" alignItems="center" xs={12}>
                                        <Typography component={Link} to="/register" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                                            注册一个
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </AuthCardWrapper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </AuthWrapper>
);

export default Login;