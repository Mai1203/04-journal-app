import { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  checkingAuthentication,
  startGoogleSignIn,
} from "../../store/auth/thunks";

export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "prueba@gmail.com",
    password: "123456",
  });

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    dispatch(checkingAuthentication());
  };

  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid2 container spacing={2}>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              autoComplete="current-password"
              placeholder="correo@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid2>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              placeholder="contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <Button
              disabled={isAuthenticating}
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
              Login
            </Button>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Button
              disabled={isAuthenticating}
              onClick={onGoogleSignIn}
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
              <Google />
              <Typography sx={{ ml: 1 }}> Google </Typography>
            </Button>
          </Grid2>
        </Grid2>

        <Grid2 container direction="row" justifyContent="end">
          <Link component={RouterLink} color="inherit" to="/auth/register">
            Crear nueva cuenta
          </Link>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
