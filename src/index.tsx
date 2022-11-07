import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, NextUIProvider } from "@nextui-org/react";

const darkTheme = createTheme({
  type: "dark",
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <NextUIProvider theme={darkTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </NextUIProvider>
);
