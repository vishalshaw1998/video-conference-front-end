import React, { useEffect } from "react";
import { useRef } from "react";
import socketIOClient from "socket.io-client";
import Peer from "peerjs";
import "./style.css";

function Body({ id }) {
    const videoElement1 = useRef();
    const videoElement2 = useRef();
    const ENDPOINT = "http://localhost:3001/";
    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        const peer = new Peer();
        navigator.mediaDevices
            .getUserMedia({
                video: true,
                audio: true,
            })
            .then((stream) => {
                addVideoStream(videoElement1.current, stream);
                peer.on("call", (call) => {
                    call.answer(stream);
                    call.on("stream", (userVideoStream) => {
                        addVideoStream(videoElement2.current, userVideoStream);
                    });
                });

                socket.on("user-connected", (userId) => {
                    connectToNewUser(userId, stream);
                });
            })
            .catch((err) => {
                alert("Please Make Sure Harware is Properly inserted");
            });
        peer.on("open", (peerId) => {
            socket.emit("join-room", id, peerId);
        });
        function connectToNewUser(userId, stream) {
            const call = peer.call(userId, stream);
            call.on("stream", (userVideoStream) => {
                addVideoStream(videoElement2.current, userVideoStream);
            });
        }
        function addVideoStream(video, stream) {
            video.srcObject = stream;
        }
    }, [id]);
    return (
        <React.Fragment>
            <div className="center">
                <video
                    ref={videoElement1}
                    onLoadedMetadata={(e) => {
                        e.target.play();
                    }}
                    muted={true}
                ></video>
                <video
                    ref={videoElement2}
                    onLoadedMetadata={(e) => {
                        e.target.play();
                    }}
                    muted={true}
                ></video>
            </div>
        </React.Fragment>
    );
}

export default Body;
