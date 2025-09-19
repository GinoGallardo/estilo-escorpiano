import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import WhatsappButton from "./components/ui/WhatsappButton.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <WhatsappButton />
    </BrowserRouter>
  </React.StrictMode>
);
