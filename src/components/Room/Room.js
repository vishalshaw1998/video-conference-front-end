import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Heading from "./Heading";
import axios from "axios";
import Body from "./Body";

function Room() {
    let { id } = useParams();
    useEffect(() => {
        axios({
            method: "GET",
            url: `https://ancient-mesa-71850.herokuapp.com/${id}`,
        }).then((res) => {
            console.log(res.data.status);
        });
    }, [id]);
    return (
        <div>
            <Heading id={id} />
            <Body id={id} />
        </div>
    );
}

export default Room;
