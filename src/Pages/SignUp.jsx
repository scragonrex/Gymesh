import React, { useState } from 'react'
import * as yup from 'yup'  //* for importing every content of that module
import { Formik } from 'formik'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { CircularProgress, FormControl, IconButton, InputAdornment,  } from '@mui/material'
import { useNavigate } from 'react-router'
import { InputLabelX, OutlinedInputX } from '../components/Utils'

const registerSchema = yup.object().shape({
  name: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
})

const initialValuesRegister = {
  name: "",
  email: "",
  password: "",
}
 


const SignUp = () => {
  const  [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const register = async (values, onSubmitProps) => {
    const url = "http://localhost:5000/auth/signup";
    // const url = "https://gymesh-backend.onrender.com/auth/signup";
    setIsLoading(true);
    const response = await fetch(url,
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" }
      });

    const registered = await response.json();
    setIsLoading(false); 
    onSubmitProps.resetForm();
    if (registered) {
      navigate('/');
    }
  }

  // const [open, setOpen] = React.useState(false);

  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setOpen(false);
  // };

  return (
    <Formik onSubmit={register}
      initialValues={initialValuesRegister}
      validationSchema={registerSchema}>
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
          <div className="workoutCont justify-content-center">
            <div className="formContainer">
            <h1 className="font-white text-align-center">SignUp Here!</h1>
              <form onSubmit={handleSubmit}>

              <FormControl fullWidth variant="outlined">
              <InputLabelX htmlFor="outlined-adornment-password">Name</InputLabelX>
                  <OutlinedInputX name='name'
                    value={values.name}
                    required label="name"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.name && Boolean(errors.name))}
                    helperText={touched.name && errors.name} />
              </FormControl>

              <FormControl fullWidth variant="outlined">
              <InputLabelX htmlFor="outlined-adornment-password">Email</InputLabelX>
                  <OutlinedInputX name='email'
                    value={values.email}
                    required label="Email"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.email && Boolean(errors.email))}
                    helperText={touched.email && errors.email} />
                    </FormControl>

                <FormControl variant="outlined">
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
                  type='submit'>{isLoading ? <CircularProgress color='success'/> : "SignUp"}</button>
                <div className='font-white'>
                  Already have an Account?. <p className=' font-link' onClick={() => navigate('/')}> Login</p>here!
                </div>
              </form>
          </div>
        </div>)
      }
    </Formik>
  )
}

export default SignUp;
 