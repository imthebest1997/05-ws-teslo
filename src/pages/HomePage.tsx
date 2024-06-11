import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import { StateConnection } from "../components/StateConnection";

export const HomePage = () => {
  const { online } = useContext(SocketContext);

  return (
    <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <h1>WebSocket - Client</h1>
            <hr />
            <StateConnection online= {online} />
          </div>            
        </div>
    </div>
  )
}
