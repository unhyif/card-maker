import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthService } from "service/authentication";
import { ImageService } from "service/image_uploader";
import "index.css";
import App from "app";

const authService = new AuthService();
const imageService = new ImageService();

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App authService={authService} imageService={imageService} />
    </BrowserRouter>
  </React.StrictMode>
);
