import { checkingCredentials, logout, login } from './authSlice';
import { registerUserWithEmailPassword, signInWithGoogle } from '../../firebase/provider';

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {

    dispatch(checkingCredentials());

  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {

    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if ( !result.ok ) return dispatch( logout(result.errorMessage));

    dispatch( login(result) );

  }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
  return async (dispatch) => {

    dispatch(checkingCredentials());
    
    const result = await registerUserWithEmailPassword(email, password, displayName);

    console.log(result);

  }
}