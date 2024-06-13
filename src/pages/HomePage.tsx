import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import { StateConnection } from "../components/StateConnection";
import { ConnectedClients } from "../components/ConnectedClients";
import { MessageForm } from "../components/MessageForm";
import { Messages } from "../components/Messages";
import TokenForm from "../components/TokenForm";

export const HomePage = () => {
  const { online } = useContext(SocketContext);

  return (
    <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <h1>WebSocket - Client</h1>
            <hr />
            <StateConnection online= {online} />
            <TokenForm />
          </div>

          <ConnectedClients />
          <MessageForm />
          <Messages />

        </div>
    </div>
  )
}
