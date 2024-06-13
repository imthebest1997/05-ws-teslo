import { useContext, useEffect } from "react";
import { SocketContext } from "../context/SocketContext";
import { handleClientsUpdated } from "../helpers/SocketHandlers";

export const ConnectedClients = () => {
    const { socket } = useContext(SocketContext);

    useEffect(() => {
        if (!socket) return;
        handleClientsUpdated(socket);
    }, [socket]);

    return (
    <div className="col-md-6">
        <h3>Connected Clients:</h3>
        <ul id="clientes-ul"></ul>
    </div>            

  )
}
