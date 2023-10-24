import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { MsalProvider } from "@azure/msal-react";
import { instance } from "./auth";
import { initializeSentry } from "./utils/initializeSentry";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

// https://bifrost.intility.com/#/Welcome%20to%20Bifrost/Get%20started/Installation
import "@intility/bifrost-react/dist/bifrost-app.css";

const rootElement = document.getElementById("root")!;

// https://bifrost.intility.com/#/Components/Interactive/Modal
// Uncomment next line if using Modal from Bifrost
// Modal.setAppElement(rootElement);

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MsalProvider instance={instance}>
      <RouterProvider router={router} />
    </MsalProvider>
  </StrictMode>,
);

initializeSentry();
