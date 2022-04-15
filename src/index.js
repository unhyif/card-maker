import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthService } from "service/authentication";
import "index.css";
import App from "app";

const authService = new AuthService();

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App authService={authService} />
  </BrowserRouter>
);
