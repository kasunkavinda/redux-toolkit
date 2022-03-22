import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "../feautures/user";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
