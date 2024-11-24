import { Link as RouterLink } from "react-router-dom";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo no es valido"],
  password: [
    (value) => value.length >= 6,
    "La contraseña debe tener al menos 6 caracteres",
  ],
  displayName: [
    (value) => value.length >= 3,
    "El nombre debe tener al menos 3 caracteres",
  ],
};

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if(!isFormValid) return;
    
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Registro - Crear Cuenta">
      <form onSubmit={onSubmit}>
        <Grid2 container spacing={2}>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              autoComplete="off"
              placeholder="Digita tu nombre"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid2>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              autoComplete="off"
              placeholder="correo@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid2>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              autoComplete="off"
              placeholder="contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid2>

          <Grid2 size={{ xs: 12 }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "secondary.main",
                ":hover": {
                  backgroundColor: "secondary.dark",
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              Crear Cuenta
            </Button>
          </Grid2>
        </Grid2>

        <Grid2 container direction="row" justifyContent="end">
          <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
          <Link component={RouterLink} color="inherit" to="/auth/login">
            Ingresar
          </Link>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
