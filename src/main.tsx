import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Routing from "./routing.tsx";

import { store } from "./store/configure-store";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <Routing />
        </Provider>
    </React.StrictMode>,
);
