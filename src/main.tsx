import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { BrowserRouter } from "react-router";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";

import "./scss/reset.scss";
import "./scss/index.scss";

import "./i18n.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
