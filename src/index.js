import React from "react";
import { createRoot } from "react-dom/client";
import { AuthService } from "service/authentication";
import "index.css";
import App from "app";

const authService = new AuthService();

const root = createRoot(document.getElementById("root"));
root.render(<App authService={authService} />);
