import React from "react";
import { Outlet } from "react-router-dom";

const MainPage = React.memo(() => (
    <div>
        MainPage
        <Outlet />
    </div>
));

export default MainPage;
