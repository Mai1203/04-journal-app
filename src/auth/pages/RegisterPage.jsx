
import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';


export const RegisterPage = () => {
  return (
    
    <AuthLayout title='Registro - Crear Cuenta'>
      <form>
              <Grid2 container spacing={2}>
              <Grid2 size={ 12 } sx={{mt:2}}>
                  <TextField
                    label="Nombre Completo"
                    type="text"
                    autoComplete="off"
                    placeholder='Digita tu nombre'
                    fullWidth
                  />
                </Grid2>
                <Grid2 size={ 12 } sx={{mt:2}}>
                  <TextField
                    label="Correo"
                    type="email"
                    autoComplete="off"
                    placeholder='correo@gmail.com'
                    fullWidth
                  />
                </Grid2>
                <Grid2 size={ 12 } sx={{mt:2}}>
                  <TextField
                    label="Contraseña"
                    type="password"
                    autoComplete="off"
                    placeholder='contraseña'
                    fullWidth
                  />
                </Grid2>

                   <Grid2  size={{ xs:12 }} >
                    <Button variant="contained" fullWidth>
                      Crear Cuenta
                    </Button>
                  </Grid2>
                  
              </Grid2>

              <Grid2 container direction='row' justifyContent='end'>
                <Typography sx={{ mr:1 }}>¿Ya tienes cuenta?</Typography>
                <Link component={ RouterLink } color='inherit' to="/auth/login">
                Ingresar
                </Link>    
              </Grid2>

            </form>
    </AuthLayout>
   
  )
}