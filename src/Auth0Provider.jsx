import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import store from "./CartRedux/Store.jsx";
import { Provider } from "react-redux";

export const AuthProvider = ({ children }) => {
    
  const domain = import.meta.env.VITE_AUTH_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH_CLIENTID;
  const redirectUri = import.meta.env.VITE_AUTH_CALLBACKURL;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
    >
      <Provider store={store}>{children}</Provider>
    </Auth0Provider>
  );
};
