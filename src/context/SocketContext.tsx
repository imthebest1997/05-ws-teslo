import { createContext } from "react";
import { useSocket } from "../hooks/useSocket";
import { environmentVariables } from "../constants/constants";
import { Socket } from "socket.io-client";

interface ISocketContext {
    socket: Socket | null;
    online: boolean;
    connectSocket: (data:string) => void;
}

export const SocketContext = createContext<ISocketContext>( {} as ISocketContext);
export const SocketProvider = ({ children }:{ children: React.ReactNode }) => {
    const { socket, online, connectSocket } = useSocket( environmentVariables.APIURL );

    return (
        <SocketContext.Provider value={{socket, online, connectSocket}}>
            {children}            
        </SocketContext.Provider>
    );
}
