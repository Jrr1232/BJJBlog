import React from "react";

function Scrolltext({ text, color }) {
    return (
        <div id="scroll-container" style={{ backgroundColor: color }}>
            <div className="scroll-track">
                <span className="scroll-item">{text} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="scroll-item">
                    {text} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {text} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="scroll-item">
                    {text} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {text} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
            </div>
        </div>
    );
}

export default Scrolltext;
