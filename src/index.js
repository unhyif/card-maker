import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthService } from "service/authentication";
import { ImageService } from "service/image_uploader";
import App from "app";
import AddForm from "components/addForm/addForm";
import EditForm from "components/editForm/editForm";
import "index.css";

const authService = new AuthService();
const imageService = new ImageService();

const AddCardForm = (props) => (
  <AddForm {...props} imageService={imageService} />
);
const EditCardForm = (props) => (
  <EditForm {...props} imageService={imageService} />
);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        authService={authService}
        AddCardForm={AddCardForm}
        EditCardForm={EditCardForm}
      />
    </BrowserRouter>
  </React.StrictMode>
);
