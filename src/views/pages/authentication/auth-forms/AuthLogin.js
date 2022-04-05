import { useState } from 'react';

// material-ui
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN } from 'store/actions';
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import login from 'utils/fetch';
import localforage from 'localforage';

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ ...others }) => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const [checked, setChecked] = useState(true);

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Formik
                initialValues={{
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    userName: Yup.string().max(255).required('请输入用户名'),
                    password: Yup.string().max(255).required('请输入密码')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    login(values)
                        .then((data) => data.json())
                        .then((data) => {
                            localforage
                                .setItem('token', data.token)
                                .then(() => {
                                    setStatus({ success: true });
                                    setSubmitting(false);
                                    dispatch({ type: LOGIN, payload: data.token });
                                })
                                .catch((err) => {
                                    setErrors({ submit: '登录失败，请确认用户名与密码后重试' });
                                });
                        })
                        .catch((error) => {
                            setStatus({ success: false });
                            setErrors({ submit: '登录失败，请确认用户名与密码后重试' });
                            setSubmitting(false);
                        });
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <FormControl
                            fullWidth
                            error={Boolean(touched.userName && errors.userName)}
                            sx={{ ...theme.typography.customInput }}
                        >
                            <InputLabel htmlFor="outlined-adornment-userName-login">用户名</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-userName-login"
                                type="text"
                                value={values.userName}
                                name="userName"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="用户名"
                                inputProps={{}}
                            />
                            {touched.userName && errors.userName && (
                                <FormHelperText error id="standard-weight-helper-text-userName-login">
                                    {errors.userName}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl
                            fullWidth
                            error={Boolean(touched.password && errors.password)}
                            sx={{ ...theme.typography.customInput }}
                        >
                            <InputLabel htmlFor="outlined-adornment-password-login">密码</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password-login"
                                type={showPassword ? 'text' : 'password'}
                                value={values.password}
                                name="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            size="large"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="密码"
                                inputProps={{}}
                            />
                            {touched.password && errors.password && (
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={(event) => setChecked(event.target.checked)}
                                        name="checked"
                                        color="primary"
                                    />
                                }
                                label="记住登录状态"
                            />
                            <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                                找回密码
                            </Typography>
                        </Stack>
                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}

                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                >
                                    登录
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default FirebaseLogin;
