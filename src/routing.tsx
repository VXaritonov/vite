import React from "react";
import { RouterProvider, createBrowserRouter, HashRouter } from "react-router-dom";

import MainPage from "src/containers/main-page";
import Page1 from "src/containers/page1";
import Page2 from "src/containers/page2";
import Page3 from "src/containers/page3";
import ErrorPage from "src/containers/error-page";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainPage />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "page1",
                    element: <Page1 />,
                },
                {
                    path: "page2",
                    element: <Page2 />,
                },
                {
                    path: "page/:id",
                    element: <Page3 />,
                },
            ],
        },
    ],
    { basename: "/vite" },
);

const Routing = React.memo(() => (
    <HashRouter>
        <RouterProvider router={router} />
    </HashRouter>
));

export default Routing;
