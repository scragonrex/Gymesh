import React, { useState } from 'react'
import * as yup from 'yup'  //* for importing every content of that module
import { Formik } from 'formik'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { CircularProgress, FormControl, IconButton, InputAdornment, useMediaQuery } from '@mui/material'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { setLogin } from '../store/authSlice'
import { InputLabelX, OutlinedInputX} from '../components/Utils'
import "../styles/login.css"

const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required")
})

const initialValuesLogin = {
    email: "",
    password: "",
}

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const login = async (values, onSubmitProps) => {
        console.log("logging")
        setIsLoading(true);
        // const url = "https://muscle-grabber-backend.onrender.com/auth/login";
        const url = "http://localhost:5000/auth/login";
        const response = await fetch(url,
            {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-Type": "application/json" }
            });

        const loggedIn = await response.json();
        setIsLoading(false);
        console.log(loggedIn); 
        onSubmitProps.resetForm();
        if (loggedIn) {
            // setOpen(true);
            dispatch(setLogin(
                {
                    user: loggedIn.user,
                    token: loggedIn.token,
                })
            )
            navigate('/home');
        }
    }

  
    const mobileView = useMediaQuery('(max-width:600px)');
    return (
        <Formik onSubmit={login}
            initialValues={initialValuesLogin}
            validationSchema={loginSchema}>
            {
                ({
                    values,
                    errors,
                    touched, //to determine if the particular filed is visited or not
                    handleBlur, //updates touched
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                    resetForm,
                }) => (
                    <div className="workoutCont">
                        <div className="formContainer">
                            <h1 className={`font-white text-align-center ${mobileView ? "font-1er" : "font-4"}`}>Login Here!</h1>
                            <form onSubmit={handleSubmit}>

                            <FormControl fullWidth variant="outlined">
                            <InputLabelX htmlFor="outlined-adornment-password">Email</InputLabelX>
                                    <OutlinedInputX 
                                     fullWidth name='email'
                                        value={values.email}
                                        required label="Email"
                                        variant="outlined"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        error={Boolean(touched.email && Boolean(errors.email))}
                                        helperText={touched.email && errors.email} />

                                </FormControl>


                                <FormControl fullWidth variant="outlined">
                                    <InputLabelX htmlFor="outlined-adornment-password">Password</InputLabelX>
                                    <OutlinedInputX
                                        id="outlined-adornment-password"
                                        name='password' value={values.password}
                                        type={showPassword ? 'text' : 'password'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={Boolean(touched.password && Boolean(errors.password))}
                                        helperText={touched.password && errors.password}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                     onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                                <button className='btn'
                                    type='submit'>{isLoading ? <CircularProgress color='success'/> : "Login"}</button>
                                <div className='font-white'>Dont have an Account?. <p className='font-link' onClick={() => navigate('/signup')}> SignUp</p>here!</div>
                            </form>
                        </div>
                    </div>)
            }
        </Formik>
    )
}

export default Login
