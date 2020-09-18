import React from 'react';
import NavBar from "./shared/NavBar/NavBar";
import CreateRoutes from '../routes/route'

function Root() {
    return (
        <div className="wrapper">
            <NavBar />
            <CreateRoutes />
        </div>
    );
}

export default Root;
