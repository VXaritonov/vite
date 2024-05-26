import React from "react";
import { Outlet } from "react-router-dom";

import { TEST_ENV } from "src/constants";

const MainPage = React.memo(() => (
    <div>
        MainPage {TEST_ENV}
        <Outlet />
    </div>
));

export default MainPage;
