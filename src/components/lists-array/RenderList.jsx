import React from "react";

function RenderList() {
    const sports = ['football', 'basket', 'golf'];
    return (
        <div>
            <ul>
                {
                    sports.map((sport, index) => (
                        <li key={index}>{sport}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default RenderList;