import React from "react";
import { uuidgenerate } from "./Helpers";
import { useHistory } from "react-router-dom";

function Homepage() {
    const history = useHistory();

    function handleCreateRoom() {
        const randomRoomId = uuidgenerate();
        history.push(`/${randomRoomId}`);
    }
    return (
        <div>
            <button onClick={handleCreateRoom}>Create A Room</button>
        </div>
    );
}

export default Homepage;
