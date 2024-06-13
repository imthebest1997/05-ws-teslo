import { useContext, useEffect } from "react";
import { SocketContext } from "../context/SocketContext";
import { handleMessageFromServer } from "../helpers/SocketHandlers";

export const Messages = () => {
    const { socket } = useContext(SocketContext);

    useEffect(()=>{
        if(!socket) return;
        handleMessageFromServer(socket);
    },[socket]);


    return (
        <div className="col-md-12">
            <h3>Messages</h3>
            <hr />
            <ul id="messages-ul" className="list-group">

            </ul>
        </div>
    )
}
