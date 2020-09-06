import React from "react";

function Heading({ id }) {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>
                Welcome to <mark>{id}</mark> Room Number
            </h1>
            <div style={{ fontWeight: "bold" }}>
                You can share the same Room with peer and Ask them to join
            </div>
        </div>
    );
}

export default Heading;
