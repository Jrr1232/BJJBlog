import React from "react";
import { Link } from "react-router-dom";

function Enterpage() {
    return (
        <div id="enter-page-container">
            <div className="content">
                <h2 className="text-shadows">Blue Belt Chronicles</h2>
            </div>
            <Link to="/homepage" id="enter">Enter</Link>
        </div>
    );
}

export default Enterpage;
