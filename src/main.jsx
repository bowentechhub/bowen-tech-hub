import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ModalProvider } from "./context/ModalProvider.jsx";
import { CommunityProvider } from "./context/CommunityProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CommunityProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </CommunityProvider>
  </StrictMode>
);
