import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import Loading from "./modules/Loading/Loading"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback={<Loading/>}>
        <Provider store={store}>
          <App />
        </Provider>
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
