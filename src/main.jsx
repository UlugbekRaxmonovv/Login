import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <GoogleOAuthProvider clientId="398111267960-d7ul8ugtucq7agghq3jvbala95b0mjr8.apps.googleusercontent.com"> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </GoogleOAuthProvider> */}
  </StrictMode>
);
