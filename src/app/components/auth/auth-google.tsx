"use client"
import { GoogleLogin } from '@react-oauth/google';

export function LoginWithGoogle() {
  return <GoogleLogin
    onSuccess={credentialResponse => {
      console.log(credentialResponse);
    }}
    onError={() => {
      console.log('Login Failed');
    }}
  />
}